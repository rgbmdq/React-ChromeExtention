import { Dish } from 'helpers/types';
import { useMutation } from 'react-query';

import { urlPattern, proxy } from '../services/apiEndpoints';

const useDishCreation = () => {
  const { dishes: { POST: { dishCreation } } } = urlPattern;
  
  const createDish = async (values: Dish) => {
    const url = `${proxy}${dishCreation}`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw new Error('Form submission failed');
    }

    // TODO: Add Push Notification: console.log("Form submitted successfully");
  };

  const mutation = useMutation(createDish);

  return {
    createDish: mutation.mutate,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
    error: mutation.error,
  };
};

export default useDishCreation;
