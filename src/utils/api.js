const API_BASE_URL = process.env.REACT_APP_API_URL;

export const fetchCrossChainData = async (chain) => {
  const response = await fetch(`${API_BASE_URL}/yield-farming/${chain}`);
  if (!response.ok) throw new Error('Failed to fetch data');
  return response.json();
};

// Developed by Web3Dev Strategy Consulting https://web3dev.click support@web3dev.click