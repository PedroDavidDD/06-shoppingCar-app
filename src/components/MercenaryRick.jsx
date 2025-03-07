import React from 'react';
import './MercenaryRick.css';

export const MercenaryRick = () => {

  return (
    <>
        <div className="feature-section__container-subtitle mercenary-rick">
            <span>🔫</span>
            <h2>Rick Mercenario</h2>
        </div>
        <div className="mercenary-rick__container">
            <h3>¿Problemas con tus clones? ¿Necesitas deshacerte de ellos discretamente? ¡Rick Mercenario está aquí para ti!</h3>
            <div className="mercenary-rick__actions">
                <div className="mercenary-rick__action">
                    <div className="action__details">
                        <div className="action__target">Eliminación Básica</div>
                        <div className="action__context">Eliminación rápida y limpia de un clon problemático</div>
                    </div>
                    <button
                        className="action__button"
                    >
                        Contratar por 
                        <div className="action__button__price">
                            <span>500</span>
                            <span>Flurbos</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}
