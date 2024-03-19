import React, { useState } from 'react'
import { abi, contractAddress } from "../abi/MarketplaceAbi";
import { Web3Button } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

const ListNFT = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    // const [file, setFile] = useState();
    const [date, setDate] = useState('');

    const handleName = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const handlePrice = (e) => {
        e.preventDefault();
        const value = ethers.utils.parseEther(e.target.value, 'ether');
        setPrice(value);
    }

    // const handleFile = (e) => {
    //     e.preventDefault();
    //     console.log(e.target.files);
    //     setFile(URL.createObjectURL(e.target.files[0]));
    // }

    const handleDate = (e) => {
        e.preventDefault();
        const date = new Date(e.target.value);
        const time = date / 1000;
        setDate(time);
    }

    return (
        <div>
            <div>
                <h1 className="main_heading">
                    List Items for sale
                </h1>
                <p className="main_paragraph">
                    Here you can list items for sale
                </p>
            </div>

            <div className="input">
                <div className="title">
                    <label >Enter name for the product: </label>
                    <input type="text" onChange={handleName} />
                </div>

                <div className="price">
                    <label>Enter price for the product: </label>
                    <input type="number" onChange={handlePrice} />
                </div>

                {/* <div className="img">
                    <label>Enter the image to mint: </label>
                    <input type="file" onChange={handleFile} />
                </div> */}

                <div className="date">
                    <label>Enter last date to offer for the product: </label>
                    <input type="date" onChange={handleDate} />
                </div>

                <Web3Button contractAddress={contractAddress} contractAbi={abi} action={async (contract) => contract.call("listNFTForMarketSale", [price, date, name])} >
                    List Item
                </Web3Button>
            </div>
        </div>
    )
}

export default ListNFT
