import { useQuery } from 'react-query';

import { urlPattern, proxy } from '../services/apiEndpoints';

const { dishes: { GET: { dishes: dishesEndpoint } } } = urlPattern;

const useDishesList = () => {
  const { data: dishes, isLoading, error } = useQuery('dishesList', async () => {
    const response = await fetch(`${proxy}${dishesEndpoint}`);

    if (!response.ok) {
      throw new Error('Request failed with status ' + response.status);
    }

    const data = await response.json();
    return data.message;
  });

  return {
    dishes,
    isLoading,
    error,
  };
};

export default useDishesList;
