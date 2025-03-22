import React from 'react';

const YieldFarmItem = ({ farm }) => {
  return (
    <div className="yield-farm-item">
      <h3>{farm.name}</h3>
      <p>APR: {farm.apr}%</p>
      <p>TVL: ${farm.tvl.toLocaleString()}</p>
      <button>Invest Now</button>
      {/* Developed by Web3Dev Strategy Consulting https://web3dev.click support@web3dev.click */}
    </div>
  );
};

export default YieldFarmItem;