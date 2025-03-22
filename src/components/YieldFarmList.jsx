import React from 'react';
import YieldFarmItem from './YieldFarmItem';

const YieldFarmList = ({ farms }) => {
  return (
    <div className="yield-farm-list">
      {farms.map((farm) => (
        <YieldFarmItem key={farm.id} farm={farm} />
      ))}
      {/* Developed by Web3Dev Strategy Consulting https://web3dev.click support@web3dev.click */}
    </div>
  );
};

export default YieldFarmList;