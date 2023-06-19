import React, { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import RecipeFormPage from './components/pages/RecipeFormPage'
import SearchPage from './components/pages/SearchPage'
import { Dish } from './helpers/types'

function App(): JSX.Element {
  const [searchResults, setSearchResults] = useState<Dish[] | null | undefined>([])
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null)
  const [dishes, setDishes] = useState<Dish[] | null>(null)

  const proxy = 'http://localhost:3000/proxy?url='

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${proxy}https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo/recipes`
        )
        if (!response.ok) {
          throw new Error('Request failed with status ' + response.status)
        }
        const data = await response?.json()
        // Handle the data returned from the API
        setDishes(data.message)
        setSelectedDish(data.message[0])
      } catch (error) {
        // Handle any errors that occur during the request
        // console.error(error)
      }
    }

    fetchData()
  }, [])

  const handleSearch = (query: string): void => {
    const filteredDishes = dishes?.filter((dish) => dish.name.toLowerCase().includes(query.toLowerCase()))
    if (!query) {
      setSearchResults([])
    } else {
      setSearchResults(filteredDishes)
    }
  }

  const handleDishSelect = (dish: Dish): void => {
    setSelectedDish(dish)
    setSearchResults([])
  }

  return (
    <div className='App' data-testid='search-page'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/popup.html'
            element={
              <SearchPage
                searchResults={searchResults}
                handleSearch={handleSearch}
                handleDishSelect={handleDishSelect}
                selectedDish={selectedDish}
              />
            }
          />
          <Route path='/add-recipe' element={<RecipeFormPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
