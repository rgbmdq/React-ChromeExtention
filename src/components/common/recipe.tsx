import React from 'react'

import { difficultyLevels } from '../../helpers/constant'
import { PaellaSvg } from '../icons'

interface RecipeProps {
  description: string
  difficulty: number
}

const Recipe: React.FC<RecipeProps> = ({ description, difficulty }) => {
  return (
    <div
      style={{
        background: '#131823',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '6px',
        width: '362px',
        height: '264px',
      }}
      data-testid='recipe'
    >
      <div
        style={{
          padding: '10px 20px',
          gap: '16px',
          width: '342px',
          height: '244px',
          background: '#17CFC4',
          borderRadius: '6px',
          boxShadow: '0px 10px 30px 3px rgba(5, 16, 55, 0.15)',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
          }}
        >
          <div className='material-icons' style={{ width: '28px', height: '28px' }}>
            <PaellaSvg />
          </div>
          <h2
            style={{
              color: '#0D1119',
              fontFamily: 'Helvetica Neue',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '18px',
              margin: '0px 0px 0px 12px',
            }}
          >
            Difficulty: {difficultyLevels[difficulty as keyof typeof difficultyLevels]}
          </h2>
        </div>
        <p
          style={{
            color: '#0D1119',
            fontFamily: 'Helvetica Neue',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            textAlign: 'left',
            margin: '14px 0px 18px',
          }}
        >
          {description}
        </p>
        {/* <Link to="https://focusedthinking.co/" target="_blank">
          <button
            style={{
              width: "302px",
              height: "40px",
              fontFamily: "Helvetica Neue",
              fontStyle: "normal",
              background: "#1D2A43",
              fontWeight: 500,
              lineHeight: "16px",
              fontSize: "14px",
              color: "#FFF",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              position: "absolute",
              bottom: "10px",
              left: "20px",
            }}
          >
            View Full Recipe
          </button>
        </Link> */}
      </div>
    </div>
  )
}

export default Recipe
