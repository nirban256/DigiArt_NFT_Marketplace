export const abi = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "_listingFee",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "fallback",
        "stateMutability": "payable"
    },
    {
        "type": "receive",
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "_idToMarketItem",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "id",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "nftContract",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "tokenId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "sellerOfTokenId",
                "type": "address",
                "internalType": "address payable"
            },
            {
                "name": "ownerOfTokenId",
                "type": "address",
                "internalType": "address payable"
            },
            {
                "name": "buyerOfTokenId",
                "type": "address",
                "internalType": "address payable"
            },
            {
                "name": "price",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "sold",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "_idToResellMarketItem",
        "inputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "id",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "nftContract",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "tokenId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "sellerOfTokenId",
                "type": "address",
                "internalType": "address payable"
            },
            {
                "name": "ownerOfTokenId",
                "type": "address",
                "internalType": "address payable"
            },
            {
                "name": "buyerOfTokenId",
                "type": "address",
                "internalType": "address payable"
            },
            {
                "name": "price",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "sold",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "cancelNFTMarketSale",
        "inputs": [
            {
                "name": "_nftContract",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_tokenId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "cancelNFTResale",
        "inputs": [
            {
                "name": "_tokenId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "changeListingFee",
        "inputs": [
            {
                "name": "_listingFee",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "createNFTMarketSale",
        "inputs": [
            {
                "name": "_nftContract",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_itemId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "createNFTResale",
        "inputs": [
            {
                "name": "_nftContract",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_itemId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "getListingFee",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getPreSaleNFT",
        "inputs": [
            {
                "name": "_nftContract",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_tokenId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct DigiArtMarketplace.Item",
                "components": [
                    {
                        "name": "id",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "nftContract",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "tokenId",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "sellerOfTokenId",
                        "type": "address",
                        "internalType": "address payable"
                    },
                    {
                        "name": "ownerOfTokenId",
                        "type": "address",
                        "internalType": "address payable"
                    },
                    {
                        "name": "buyerOfTokenId",
                        "type": "address",
                        "internalType": "address payable"
                    },
                    {
                        "name": "price",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "sold",
                        "type": "bool",
                        "internalType": "bool"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "listNFTForMarketSale",
        "inputs": [
            {
                "name": "_nftContract",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_tokenId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_price",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "listNFTResale",
        "inputs": [
            {
                "name": "_nftContract",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_tokenId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_price",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "owner",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "pause",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "paused",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "renounceOwnership",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "inputs": [
            {
                "name": "newOwner",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "unpause",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "withdraw",
        "inputs": [],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "type": "event",
        "name": "MarketItemCreated",
        "inputs": [
            {
                "name": "sellerOfTokenId",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "buyerOfTokenId",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "price",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "MarketItemCreatedForResale",
        "inputs": [
            {
                "name": "sellerOfTokenId",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "buyerOfTokenId",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "price",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "MarketItemSold",
        "inputs": [
            {
                "name": "sellerOfTokenId",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "buyerOfTokenId",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "price",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "name": "previousOwner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "newOwner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Paused",
        "inputs": [
            {
                "name": "account",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Unpaused",
        "inputs": [
            {
                "name": "account",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "EnforcedPause",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ExpectedPause",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OwnableInvalidOwner",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "OwnableUnauthorizedAccount",
        "inputs": [
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "ReentrancyGuardReentrantCall",
        "inputs": []
    }
]