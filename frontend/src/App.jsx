import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
} from "@thirdweb-dev/react";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Collections from './components/Collections';

const App = () => {
  const [mode, setMode] = useState('dark-mode');
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
      activeChain="mumbai"
      clientId={process.env.REACT_APP_THIRDWEB_CLIENT_ID}
      supportedWallets={[
        metamaskWallet({ recommended: true }),
        coinbaseWallet(),
        walletConnect(),
      ]}>
      <div className={`App ${mode}`}>
        <Header toggleTheme={toggleTheme} mode={mode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collections />} />
        </Routes>
      </div>
    </ThirdwebProvider>
  );
}

export default App;
