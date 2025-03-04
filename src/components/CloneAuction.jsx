import React from 'react'
import './CloneAuction.css';

export const CloneAuction = () => {

  return (
    <>
      <div className='clone-auction'>
        <span>💰</span>
        <h2>Subasta de Clones</h2>
      </div>
      <div className="clone-auction__content">
        <h3>¡Subasta en vivo!</h3>
        <div className="clone-auction__img"></div>
        <div className="clone-auction__item clone-auction__information">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam necessitatibus minus aspernatur ex delectus labore, rerum sed earum alias eaque.
        </div>
        <div className='clone-auction__item clone-auction__sale'>
          <h4>Termina en: <span>23:00:00</span></h4>
          <h4>Oferta actual: <span>15,000</span> Flurbos</h4>
        </div>
        <div className="clone-auction__item clone-auction__bidValue">
          <input type="number" min={15000} className='clone-auction_bidValue__value'/>
          <button type="button" className='clone-auction_bidValue__button'>Ofertar</button>
        </div>
      </div>
        
    </>
  )
}
