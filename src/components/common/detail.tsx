import React from 'react'

import IngredientBox from './ingredientBox'

interface DetailProps {
  produce: string
  authenticity: string
  cookingOil: string
  protein: string
  serves: number
  spice: string
  stock: string
  volume: number
}

const Detail: React.FC<DetailProps> = ({
  produce,
  authenticity,
  cookingOil,
  protein,
  serves,
  spice,
  stock,
  volume,
}) => {
  return (
    <div
      style={{
        background: '#131823',
        borderRadius: '6px',
        width: '362px',
        height: '228px',
        padding: '14px 0px 14px 14px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginTop: '8px',
      }}
      data-testid='detail'
    >
      <IngredientBox
        label={'Protein'}
        styles={{
          marginRight: '16px',
        }}
        value={protein}
      />
      <IngredientBox
        label={'Produce'}
        styles={{
          marginRight: '16px',
        }}
        value={produce}
      />
      <IngredientBox label={'Spices'} styles={{
    marginRight: '16px' }} value={spice} />
      <IngredientBox label={'Cooking Oil'} value={cookingOil} />
      <IngredientBox
        label={'Volume/Weight'}
        styles={{
          marginRight: '16px',
        }}
        value={volume}
      />
      <IngredientBox label={'Serves'} value={serves} />
      <IngredientBox
        label={'Authenticity'}
        styles={{
          marginRight: '16px',
        }}
        value={authenticity}
      />
      <IngredientBox label={'Stock'} value={stock} />
    </div>
  )
}

export default Detail
