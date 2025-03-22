import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WalletProvider } from './contexts/WalletContext';
import './styles.css';

// Create a root for React 18+ using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app inside the WalletProvider to enable global wallet state management
root.render(
  <React.StrictMode>
    <WalletProvider>
      <App />
    </WalletProvider>
  </React.StrictMode>
);

// Developed by Web3Dev Strategy Consulting https://web3dev.click support@web3dev.click