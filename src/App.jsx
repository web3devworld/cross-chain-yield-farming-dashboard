import React, { useCallback, useState } from 'react';
import Header from './components/Header';
import ChainSelector from './components/ChainSelector';
import YieldFarmList from './components/YieldFarmList';
import useCrossChainData from './hooks/useCrossChainData';
import useWalletConnect from './hooks/useWalletConnect';

const App = () => {
  const [selectedChain, setSelectedChain] = useState('ethereum');
  const { data: farms, loading } = useCrossChainData(selectedChain);
  const { walletAddress, connectWallet, error } = useWalletConnect();

  const handleChainChange = useCallback((chain) => {
    setSelectedChain(chain);
  }, []);

  return (
    <div className="app">
      <Header />
      <button onClick={connectWallet}>
        {walletAddress ? `Connected: ${walletAddress}` : 'Connect Wallet'}
      </button>
      {error && <p className="error">{error}</p>}
      <ChainSelector onChainChange={handleChainChange} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <YieldFarmList farms={farms} />
      )}
      {/* Developed by Web3Dev Strategy Consulting https://web3dev.click support@web3dev.click */}
    </div>
  );
};

export default App;