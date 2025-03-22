import React, { createContext, useContext, useState, useCallback } from 'react';
import { ethers } from 'ethers';

// Create a WalletContext
const WalletContext = createContext();

/**
 * Provider component to wrap the app and provide wallet-related state and functions.
 */
export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null); // Stores the connected wallet address
  const [provider, setProvider] = useState(null); // Stores the Web3 provider instance
  const [error, setError] = useState(null); // Stores any errors during wallet connection

  /**
   * Connects to the user's wallet (e.g., MetaMask).
   */
  const connectWallet = useCallback(async () => {
    try {
      // Check if the browser supports Ethereum (e.g., MetaMask is installed)
      if (!window.ethereum) {
        throw new Error('MetaMask not detected. Please install MetaMask or use an Ethereum-compatible browser.');
      }

      // Create a Web3 provider using ethers.js
      const ethereumProvider = new ethers.providers.Web3Provider(window.ethereum);

      // Request account access from the user
      await ethereumProvider.send('eth_requestAccounts', []);

      // Get the signer (connected account)
      const signer = ethereumProvider.getSigner();
      const address = await signer.getAddress();

      // Update state with the connected wallet address and provider
      setWalletAddress(address);
      setProvider(ethereumProvider);
      setError(null); // Clear any previous errors
    } catch (err) {
      console.error('Wallet connection error:', err.message);
      setError(err.message || 'Failed to connect wallet.');
    }
  }, []);

  /**
   * Disconnects the wallet by resetting the state.
   */
  const disconnectWallet = useCallback(() => {
    setWalletAddress(null);
    setProvider(null);
    setError(null);
  }, []);

  // Context value to be provided to the app
  const value = {
    walletAddress,
    provider,
    error,
    connectWallet,
    disconnectWallet,
  };

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
};

/**
 * Custom hook to use the WalletContext.
 */
export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

// Developed by Web3Dev Strategy Consulting https://web3dev.click support@web3dev.click