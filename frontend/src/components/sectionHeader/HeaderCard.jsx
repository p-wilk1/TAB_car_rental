import React from 'react'
import HeaderCardCSS from './HeaderCard.module.css'
import ButtonMultipurpose from './shared/ButtonMultipurpose'

function HeaderCard() {
  return (
    <div className={HeaderCardCSS.headerCardContainer}>
        <h1>SoGood Rentals - wymarzony samochód od zaraz.</h1>
        <h2>Dzięki SoGood Rentals możesz wypożyczyć wymarzony luksusowy samochód wybrany z obszernej floty w kilka minut.</h2>
        <ButtonMultipurpose url='#'>Przejrzyj flotę</ButtonMultipurpose>
    </div>
  )
}

export default HeaderCard