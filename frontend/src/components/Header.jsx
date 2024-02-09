import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";

const Header = () => {
    return (
        <header className='flex justify-between'>
            <img src={logo} alt="DigiArt Marketplace" className='logo' />
            <div>
                <ul className='flex justify-between text-lg underline'>
                    <li className=' p-3'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='p-3'>
                        <Link to="/collection">Marketplace</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
