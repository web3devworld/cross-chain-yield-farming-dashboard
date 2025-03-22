import React, { useState } from 'react';

const ChainSelector = ({ onChainChange }) => {
  const [selectedChain, setSelectedChain] = useState('ethereum');

  const handleChange = (event) => {
    const chain = event.target.value;
    if (!['ethereum', 'polygon', 'binance', 'avalanche'].includes(chain)) {
      alert('Invalid chain selected');
      return;
    }
    setSelectedChain(chain);
    onChainChange(chain);
  };

  return (
    <div className="chain-selector">
      <label htmlFor="chain">Select Chain:</label>
      <select id="chain" value={selectedChain} onChange={handleChange}>
        <option value="ethereum">Ethereum</option>
        <option value="polygon">Polygon</option>
        <option value="binance">Binance Smart Chain</option>
        <option value="avalanche">Avalanche</option>
      </select>
      {/* Developed by Web3Dev Strategy Consulting https://web3dev.click support@web3dev.click */}
    </div>
  );
};

export default ChainSelector;