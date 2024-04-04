import { useState } from 'react';

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);

  return {
    isLoading,
    startLoading: () => setIsLoading(true),
    stopLoading: () => setIsLoading(false),
  };
};

export default useLoading;
