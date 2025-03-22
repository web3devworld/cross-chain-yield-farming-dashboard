import { useQuery } from '@tanstack/react-query';
import { fetchCrossChainData } from '../utils/api';

const useCrossChainData = (chain) => {
  const { data, isLoading, error } = useQuery(['yieldFarms', chain], () => fetchCrossChainData(chain), {
    staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
  });

  return { data, loading: isLoading, error };
};

// Developed by Web3Dev Strategy Consulting https://web3dev.click support@web3dev.click
export default useCrossChainData;