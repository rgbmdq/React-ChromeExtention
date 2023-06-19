import { Dish } from 'helpers/types'
import React from 'react'
import { Link } from 'react-router-dom'

import { RecipeForm } from '../common'
import { BackSvg } from '../icons'

const RecipeFormPage: React.FC = () => {
  const proxy = 'http://localhost:3000/proxy?url='

  const handleSubmit = async (values: Dish) => {
    try {
      const url = `${proxy}https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo/recipes`
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (response.status === 200) {
        // TODO: Add Push Notificaiton: console.log("Form submitted successfully");
      } else {
        // TODO: Add Push Notificaiton: console.log("Form submission failed", response);
      }
    } catch (error) {
      // TODO: Add Push Notificaiton: console.log("An error occurred during form submission:", error);
    }
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
