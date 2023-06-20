import React from 'react'

import { difficultyLevels } from '../../helpers/constant'
import { Dish } from '../../helpers/types'
import { SearchBar, Recipe, Detail, DishHeader } from '../common'
import { SpainSvg, IndiaSvg, ThailandSvg, VietnamSvg, EasySvg, MediumSvg, HardSvg } from '../icons'

interface SearchPageProps {
  searchResults: Dish[] | null | undefined
  handleSearch: (query: string) => void
  handleDishSelect: (dish: Dish) => void
  selectedDish: Dish | null
}

const SearchPage: React.FC<SearchPageProps> = ({ searchResults, handleSearch, handleDishSelect, selectedDish }) => {
  return (
    <div className='Container'>
      <div style={{ position: 'relative' }}>
        <SearchBar onSearch={handleSearch} />
        <ul
          style={{
            position: 'absolute',
            top: '38px',
            width: '364px',
            background: '#121826',
            textAlign: 'left',
            color: 'white',
            cursor: 'pointer',
            borderRadius: '6px',
            zIndex: 1,
            listStyle: 'none',
            padding: 0,
            maxHeight: '190px',
            overflowY: 'auto',
          }}
        >
          {searchResults?.map((dish, index) => (
            <li onClick={() => handleDishSelect(dish)} style={{
              transition: 'opacity 0.3s',
              margin: '4px',
              borderRadius: '6px',
              display: 'flex',
              padding: '6px 6px 6px 12px',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
             key={index}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    paddingRight: '4px',
                    margin: '4px 0px 0px 0px',
                  }}
                >
                  {dish.origin === 'sp' && <SpainSvg />}
                  {dish.origin === 'in' && <IndiaSvg />}
                  {dish.origin === 'ta' && <ThailandSvg />}
                  {dish.origin === 'vi' && <VietnamSvg />}
                </div>
                {dish.name}
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '4px' }}>
                  {dish.difficulty === 0 && <EasySvg />}
                  {dish.difficulty === 1 && <MediumSvg />}
                  {dish.difficulty === 2 && <HardSvg />}
                </div>
                <p
                  style={{
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '24px',
                    paddingRight: '10px',
                    margin: '0px',
                  }}
                >
                  {difficultyLevels[dish.difficulty as keyof typeof difficultyLevels]}
                  <span
                    style={{
                      color: '#1F2A44',
                      fontSize: '18px',
                      fontWeight: '100',
                    }}
                  >
                    {' '}
                    |
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <DishHeader name={selectedDish?.name} origin={selectedDish?.origin} />
        {selectedDish ? (
          <>
            <Recipe description={selectedDish?.description} difficulty={selectedDish?.difficulty} />
            <Detail
              produce={selectedDish?.produce}
              authenticity={selectedDish?.authenticity}
              cookingOil={selectedDish?.cookingOil}
              protein={selectedDish?.protein}
              serves={selectedDish?.serves}
              spice={selectedDish?.spice}
              stock={selectedDish?.stock}
              volume={selectedDish?.volume}
            />
          </>
        ) : null}
      </div>
    </div>
  )
}

export default SearchPage
