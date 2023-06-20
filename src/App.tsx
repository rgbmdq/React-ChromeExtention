import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RecipeFormPage from './components/pages/RecipeFormPage';
import SearchPage from './components/pages/SearchPage';
import { Dish } from './helpers/types';
import useDishesList from './hooks/useDishesList';

function App(): JSX.Element {
  const [searchResults, setSearchResults] = useState<Dish[] | null | undefined>([]);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [dishes, setDishes] = useState<Dish[] | null>(null);

  const { dishes: dishesList, isLoading } = useDishesList();

  useEffect(() => {
    if (!isLoading && dishesList) {
      setDishes(dishesList);
      setSelectedDish(dishesList[0]);
    }
  }, [dishesList, isLoading]);

  const handleSearch = (query: string): void => {
    const filteredDishes = dishes?.filter((dish) => dish.name.toLowerCase().includes(query.toLowerCase()));
    if (!query) {
      setSearchResults([]);
    } else {
      setSearchResults(filteredDishes);
    }
  };

  const handleDishSelect = (dish: Dish): void => {
    setSelectedDish(dish);
    setSearchResults([]);
  };

  return (
    <div className="App" data-testid="search-page">
      <BrowserRouter>
        <Routes>
          <Route
            path="/popup.html"
            element={
              <SearchPage
                searchResults={searchResults}
                handleSearch={handleSearch}
                handleDishSelect={handleDishSelect}
                selectedDish={selectedDish}
              />
            }
          />
          <Route path="/add-recipe" element={<RecipeFormPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function RootApp(): JSX.Element {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}

export default RootApp;
