import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
} from "@thirdweb-dev/react";
import { ArbitrumSepolia } from "@thirdweb-dev/chains";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Collections from './components/Collections';
import ListNFT from './components/ListNFT';

const App = () => {
  const [mode, setMode] = useState('light-mode');
  const toggleTheme = () => {
    if (mode === 'dark-mode') {
      setMode('light-mode');
    } else {
      setMode('dark-mode');
    }
  }

  useEffect(() => {
    document.body.className = mode;
  }, [mode]);

  return (
    <ThirdwebProvider
      activeChain={ArbitrumSepolia}
      clientId={process.env.REACT_APP_THIRDWEB_CLIENT_ID}
      supportedWallets={[
        metamaskWallet({ recommended: true }),
        coinbaseWallet(),
        walletConnect(),
      ]}>
      <div className={`${mode} overflow-x-hidden`}>
        <Header toggleTheme={toggleTheme} mode={mode} />
        <Routes>
          <Route path="/" element={<Home />} mode={mode} />
          <Route path="/collection" element={<Collections />} />
          <Route path="/listnft" element={<ListNFT />} />
        </Routes>
      </div>
    </ThirdwebProvider>
  );
}

export default App;
