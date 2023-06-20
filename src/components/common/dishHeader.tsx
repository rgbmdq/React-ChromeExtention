import React from 'react'
import { Link } from 'react-router-dom'

import { SpainSvg, IndiaSvg, ThailandSvg, VietnamSvg, MediumSocialSvg, TelegramSvg, TwitterSvg } from '../icons'

interface DishHeaderProps {
  origin?: string
  name?: string
}

const DishHeader: React.FC<DishHeaderProps> = ({ name, origin }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '362px',
        height: '24px',
      }}
      data-testid='dish-header'
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {!name ? null : (
          <>
            <div
              style={{
                width: '24px',
                height: '24px',
                background: '#171F2F',
                borderRadius: '30px',
              }}
            >
              {origin === 'sp' && <SpainSvg />}
              {origin === 'in' && <IndiaSvg />}
              {origin === 'ta' && <ThailandSvg />}
              {origin === 'vi' && <VietnamSvg />}
            </div>
            <h2
              style={{
                color: '#fff',
                fontFamily: 'Helvetica Neue',
                fontWeight: '500',
                fontSize: '14px',
                margin: '0px 0px 0px 10px',
              }}
            >
              {name ? name : ''}
            </h2>
          </>
        )}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '5px',
        }}
      >
        <div
          style={{
            width: '24px',
            height: '24px',
            background: '#171F2F',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TwitterSvg />
        </div>
        <div
          style={{
            width: '24px',
            height: '24px',
            background: '#171F2F',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TelegramSvg />
        </div>
        <div
          style={{
            width: '24px',
            height: '24px',
            background: '#171F2F',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MediumSocialSvg />
        </div>
        <div
          style={{
            width: '90px',
            height: '24px',
            borderRadius: '6px',
          }}
        >
          <Link to='/add-recipe'>
            <button
              style={{
                fontFamily: 'Helvetica Neue',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '13px',
                lineHeight: '24px',
                background: '#171F2F',
                color: '#fff',
                borderRadius: '6px',
                borderStyle: 'none',
              }}
            >
              + Add recipe
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DishHeader
