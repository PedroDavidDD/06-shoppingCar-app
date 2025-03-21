import React from 'react'
import './PrisonFromMercenaries.css'
import { useGlobalStore } from '../store/Store';

export const PrisonFromMercenaries = () => {
    const cartClones = useGlobalStore(state => state.cartClones);
    const listCartClonesHidden = cartClones.filter((char)=> char.isHidden);

  return (
    <>
        <div className="feature-section__container-subtitle">
            <span>⛓️</span>
            <h2>Prisioneros</h2>
        </div>         
        <div  className="prison-from-mercenaries">   
            <div className="pfm__column pfm__column-1 overflow-auto max-h-[20rem]">
                {   listCartClonesHidden.map((item)=>
                    (
                        <span
                            key={item.id} 
                        >
                            {item.id} - {item.name} - {item.location.name} - {item.rarity}
                        </span>
                    )
                )}
            </div>
        </div>
    </>
  )
}
