import React from 'react';
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { ConnectWallet } from "@thirdweb-dev/react";
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";

const Header = ({ toggleTheme, mode }) => {

    const handleTheme = () => {
        if (mode === 'dark-mode') {
            return 'dark';
        } else {
            return 'light';
        }
    }

    return (
        <header className='flex justify-between border-b-2 bg-slate-200'>
            <img src={logo} alt="DigiArt Marketplace" className='logo' />
            <div>
                <ul className='flex justify-between text-lg p-3 cursor-pointer'>
                    <button className='btn p-3' onClick={toggleTheme}>
                        {mode === 'dark-mode' ? <MdOutlineDarkMode size={25} /> : <MdDarkMode size={25} color='black' />}
                    </button>
                    <li className=' p-3'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='p-3'>
                        <Link to="/collection">Marketplace</Link>
                    </li>
                    <li className='p-3'>
                        <Link to="/listnft">List NFT</Link>
                    </li>
                    <ConnectWallet
                        theme={handleTheme()}
                        switchToActiveChain={true}
                        modalSize={"compact"}
                        showThirdwebBranding={false}
                    />
                </ul>
            </div>
        </header>
    )
}

export default Header;
