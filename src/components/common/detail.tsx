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
        padding: '13px 0px 13px 24px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
      }}
      data-testid='detail'
    >
      <IngredientBox label={'Protein'} value={protein} />
      <IngredientBox label={'Spice Level'} value={produce} />
      <IngredientBox label={'Spices'} value={spice} />
      <IngredientBox label={'Cooking Oil'} value={cookingOil} />
      <IngredientBox label={'Volume/Weight'} value={volume} />
      <IngredientBox label={'Serves'} value={serves} />
      <IngredientBox label={'Authenticity'} value={authenticity} />
      <IngredientBox label={'Stock'} value={stock} />
    </div>
  )
}

export default Detail
