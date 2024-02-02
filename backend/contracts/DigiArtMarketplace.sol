// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {Pausable} from "@openzeppelin/contracts/utils/Pausable.sol";

/* 
    counter.sol alternative approach
    _safeMint(_receiver, _tokenIdCounter++);
*/

/*
    way to find all the nfts owned by a user - using opensea api - https://docs.opensea.io/reference/api-overview
*/

contract DigiArtMarketplace is ERC721, Ownable, ReentrancyGuard, Pausable {
    IERC721 nft;

    uint256 private _listedTokenIdCounter;
    uint256 private _soldTokenIdCounter;

    uint256 public listingFee;

    address payable admin;

    struct Item {
        uint256 id;
        address nftContract;
        uint256 tokenId;
        address payable sellerOfTokenId;
        address payable ownerOfTokenId;
        address payable buyerOfTokenId;
        uint256 price;
        bool sold;
    }

    mapping(uint256 => Item) public _idToMarketItem;

    event MarketItemCreated(
        address indexed sellerOfTokenId,
        address indexed buyerOfTokenId,
        uint256 indexed price
    );

    event MarketItemSold(
        address indexed sellerOfTokenId,
        address indexed buyerOfTokenId,
        uint256 indexed price
    );

    constructor(
        uint256 _listingFee
    ) Ownable(msg.sender) ERC721("DigiArtMarketplace", "DAM") {
        require(msg.sender != address(0), "Invalid address");
        require(_listingFee > 0, "Listing fee must be greater than 0");
        admin = payable(msg.sender);
    }

    function listForMarketSale(
        address _nftContract,
        uint256 _tokenId,
        uint256 _price
    ) public payable nonReentrant whenNotPaused {
        require(_price > 0 ether, "Price must be greater than 0 ether");
        require(
            msg.value == listingFee,
            "Not enough balance to complete transaction"
        );

        nft = ERC721(_nftContract);
        require(
            nft.ownerOf(_tokenId) == msg.sender ||
                nft.getApproved(_tokenId) == msg.sender,
            "You are not the owner of this token"
        );

        uint256 _id = _listedTokenIdCounter;

        _idToMarketItem[_tokenId] = Item(
            _id,
            _nftContract,
            _tokenId,
            payable(msg.sender),
            payable(address(this)),
            payable(address(0)),
            _price,
            false
        );
        _listedTokenIdCounter += 1;

        nft.safeTransferFrom(msg.sender, address(this), _tokenId);
        // ERC721(_nftContract).approve(address(this), _tokenId);

        emit MarketItemCreated(msg.sender, address(0), _price);
    }

    function createMarketSale(
        address nftContract,
        uint256 _itemId
    ) public payable nonReentrant whenNotPaused {
        uint price = _idToMarketItem[_itemId].price;
        uint tokenId = _idToMarketItem[_itemId].tokenId;
        require(
            msg.value == price,
            "Not enough balance to complete transaction"
        );
        require(
            _idToMarketItem[_itemId].sellerOfTokenId != msg.sender,
            "You cannot buy your own token"
        );
        require(_idToMarketItem[_itemId].sold == true, "Token already sold");
        require(_idToMarketItem[_itemId].tokenId >= 0, "Token not listed");

        _idToMarketItem[_itemId].buyerOfTokenId = payable(msg.sender);
        _idToMarketItem[_itemId].ownerOfTokenId = payable(msg.sender);
        _idToMarketItem[_itemId].sold = true;

        _soldTokenIdCounter += 1;

        nft = ERC721(nftContract);

        (bool success, ) = address(this).call{value: price}("");
        require(success, "Transfer failed while buying token");

        nft.safeTransferFrom(address(this), msg.sender, tokenId);

        (success, ) = _idToMarketItem[_itemId].sellerOfTokenId.call{
            value: price
        }("");
        require(success, "Transfer failed while sending money to seller");

        emit MarketItemSold(
            _idToMarketItem[_itemId].sellerOfTokenId,
            _idToMarketItem[_itemId].buyerOfTokenId,
            _idToMarketItem[_itemId].price
        );
    }

    function cancelMarketSale(
        uint256 _tokenId
    ) public nonReentrant whenNotPaused {
        require(
            _idToMarketItem[_tokenId].sellerOfTokenId == msg.sender ||
                _idToMarketItem[_tokenId].ownerOfTokenId == msg.sender,
            "You don't have the required permission"
        );
        require(_idToMarketItem[_tokenId].sold == true, "Token already sold");

        nft = ERC721(_idToMarketItem[_tokenId].nftContract);
        nft.safeTransferFrom(address(this), msg.sender, _tokenId);

        delete _idToMarketItem[_tokenId];
    }

    function getListingFee() public view returns (uint256) {
        return listingFee;
    }

    function changeListingFee(
        uint256 _listingFee
    ) public onlyOwner whenNotPaused {
        require(_listingFee != 0, "Listing Fee cannot be zero");
        listingFee = _listingFee;
    }

    function pause() public onlyOwner whenNotPaused {
        _pause();
    }

    function unpause() public onlyOwner whenPaused {
        _unpause();
    }

    function withdraw() public payable onlyOwner whenNotPaused {
        (bool success, ) = admin.call{value: address(this).balance}("");
        require(success, "Transfer failed.");
    }

    fallback() external payable {
        revert("Invalid function called");
    }

    receive() external payable {
        revert("Invalid function called");
    }
}
