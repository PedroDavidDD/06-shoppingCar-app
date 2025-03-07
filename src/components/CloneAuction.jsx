import React, { useRef, useEffect, useState } from 'react';
import './CloneAuction.css';
import Timer from '../utilities/Timer';
import { useMouseRotation } from '../hooks/useMouseRotation';

export const CloneAuction = () => {

  const { wrapperRef, ticketRef } = useMouseRotation();

  const bidValue = 15000;

  return (
    <>
      <div className='feature-section__container-subtitle clone-auction'>
        <span>💰</span>
        <h2>Subasta de Clones</h2>
      </div>
      <div className="clone-auction__content">
        <h3>¡Subasta en vivo!</h3>
        <div 
          className="clone-auction__item clone-auction__img"  
          ref={wrapperRef}
        >
          <span ref={ticketRef} ></span>
        </div>
        <div className="clone-auction__item clone-auction__information">
          Rick C-137 genuino. Certificado por el Consejo de Ricks. Sus habilidades científicas son excepcionales y viene con un portal gun (munición no incluida).
        </div>
        <div className='clone-auction__item clone-auction__sale'>
          <h4>
            Termina en: <Timer />
          </h4>
          <h4>
            Oferta actual: <span>{ bidValue }</span> Flurbos
          </h4>
        </div>
        <div className="clone-auction__item clone-auction__bidValue">
          <input type="number" min={ bidValue } className='clone-auction_bidValue__value'/>
          <button type="button" className='clone-auction_bidValue__button'>Ofertar</button>
        </div>
      </div>
    </>
  );
};
