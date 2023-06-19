import { render, screen } from '@testing-library/react'
import React from 'react'
import App from './App'

test('renders the app and checks for various elements', () => {
  render(<App />)

  // Check for the search bar element
  const searchBarElement = screen.getByTestId('search-page')
  expect(searchBarElement).toBeInTheDocument()

  console.log('screen ->', screen)
})
