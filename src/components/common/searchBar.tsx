import React, { useState, ChangeEvent } from 'react'

interface SearchBarProps {
  onSearch: (query: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value
    setSearchQuery(query)
    onSearch(query)
  }

  return (
    <>
      <link rel='stylesheet' href='https://www.w3schools.com/w3css/4/w3.css' />
      <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          border: '2px solid #5B6178',
          height: '40px',
          width: '362px',
          left: '0px',
          top: '0px',
          borderRadius: '6px',
          padding: '8px 11px',
          background: '#131823',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <i
          className='material-icons'
          style={{
            color: '#FFF',
            marginRight: '10px',
            fontSize: '24px',
          }}
        >
          search
        </i>
        <input
          type='text'
          style={{
            flex: 1,
            background: 'none',
            border: 'none',
            outline: 'none',
            color: '#7185AA',
            fontFamily: 'Helvetica Neue',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
          }}
          placeholder='Search cuisine'
          value={searchQuery}
          onChange={handleInputChange}
          data-testid='search-bar'
        />
      </div>
    </>
  )
}

export default SearchBar
