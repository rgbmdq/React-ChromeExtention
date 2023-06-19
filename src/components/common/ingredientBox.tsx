import React from 'react'

interface IngredientBoxProps {
  value: string | number
  label: string
}

const IngredientBox: React.FC<IngredientBoxProps> = ({ value, label }) => {
  const orangeStyle = {
    fontSize: '16px',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 500,
    margin: '0px',
    background: 'linear-gradient(136.39deg, #FFBF43 3.18%, #FF4869 102.04%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
  }

  const redStyle = {
    fontSize: '16px',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 500,
    margin: '0px',
    color: 'red',
  }

  const whiteStyle = {
    fontSize: '16px',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 500,
    margin: '0px',
    color: 'white',
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
        width: '145px',
        height: '44px',
        textAlign: 'left',
      }}
    >
      <p
        style={{
          color: '#7185AA',
          fontSize: '13px',
          fontFamily: 'Helvetica Neue',
          fontStyle: 'normal',
          fontWeight: 400,
          margin: '0px',
        }}
      >
        {label}
      </p>
      <p
        style={
          label === 'Spices'
            ? orangeStyle
            : label === 'Spice Level'
            ? redStyle
            : label === 'Cooking Oil' || label === 'Authenticity' || label === 'Stock'
            ? orangeStyle
            : whiteStyle
        }
      >
        {value}
      </p>
    </div>
  )
}

export default IngredientBox
