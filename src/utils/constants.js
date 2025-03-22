// Supported blockchain networks
export const SUPPORTED_CHAINS = [
    {
      id: 'ethereum',
      name: 'Ethereum',
      logo: '/assets/logos/ethereum.png', // Example path to Ethereum logo
    },
    {
      id: 'polygon',
      name: 'Polygon',
      logo: '/assets/logos/polygon.png', // Example path to Polygon logo
    },
    {
      id: 'binance',
      name: 'Binance Smart Chain',
      logo: '/assets/logos/binance.png', // Example path to Binance logo
    },
    {
      id: 'avalanche',
      name: 'Avalanche',
      logo: '/assets/logos/avalanche.png', // Example path to Avalanche logo
    },
  ];
  
  // Default chain to load when the app starts
  export const DEFAULT_CHAIN = 'ethereum';
  
  // API endpoints (these can also be moved to .env for security)
  export const API_ENDPOINTS = {
    YIELD_FARMING: '/yield-farming', // Base endpoint for yield farming data
  };
  
  // Error messages
  export const ERROR_MESSAGES = {
    WALLET_NOT_CONNECTED: 'Wallet not connected. Please connect your wallet.',
    INVALID_CHAIN: 'Invalid chain selected. Please choose a supported chain.',
    FETCH_ERROR: 'Failed to fetch data. Please try again later.',
  };
  
  // Developed by Web3Dev Strategy Consulting https://web3dev.click support@web3dev.click