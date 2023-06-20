import { Dish } from 'helpers/types'
import React from 'react'
import { Link } from 'react-router-dom'

import useDishCreation from '../../hooks/useDishCreation'
import { RecipeForm } from '../common'
import { BackSvg } from '../icons'


const RecipeFormPage: React.FC = () => {

  const { createDish } = useDishCreation();

  const handleSubmit = async (values: Dish) => {
    createDish(values);
  }

  return (
    <div className='ContainerRecipe'>
      <div
        style={{
          borderRadius: '6px',
          width: '362px',
          display: 'flex',
          padding: '24px',
        }}
      >
        <Link to='/popup.html'>
          <button
            style={{
              fontFamily: 'Helvetica Neue',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: '13px',
              lineHeight: '24px',
              borderRadius: '6px',
              borderStyle: 'none',
              background: 'none',
            }}
          >
            <BackSvg />
          </button>
        </Link>
        <h1
          style={{
            color: '#fff',
            fontFamily: 'Helvetica Neue',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '18px',
            margin: '0px',
            paddingLeft: '4px',
          }}
        >
          Add new recipe
        </h1>
        <div
          style={{
            position: 'absolute',
            top: '64px',
            marginLeft: '24px',
            marginRight: '24px',
            left: '0',
            width: '88%',
            height: '1px',
            background: '#2E3347',
            content: "''",
          }}
        ></div>
      </div>
      <RecipeForm handleSubmit={handleSubmit} />
    </div>
  )
}

export default RecipeFormPage
