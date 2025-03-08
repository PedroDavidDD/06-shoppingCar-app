import React, { useState } from 'react';
import './MercenaryRick.css';
import { useGlobalStore } from '../store/store';

export const MercenaryRick = () => {

    const cartClones = useGlobalStore(state => state.cartClones);
    const deleteCartClone = useGlobalStore(state => state.deleteCartClone);
    const clearCartClones = useGlobalStore(state => state.clearCartClones);

    const actionMercenaries = useGlobalStore(state => state.actionMercenaries);

    const [idCartClone, setIdClone] = useState(0)

    const handlerDeleteById =()=>{
        const repeatObjItem = cartClones.filter( it => it.id === idCartClone);
        if (repeatObjItem.length == 0) return;
        deleteCartClone(idCartClone);
    }

    const handlerOnChange =(event)=>{
        setIdClone( Number( event.target.value ) )
    }

  return (
    <>
        <div className="feature-section__container-subtitle mercenary-rick">
            <span>🔫</span>
            <h2>Rick Mercenario</h2>
        </div>
        <div className="mercenary-rick__container">
            <h3>¿Problemas con tus clones? ¿Necesitas deshacerte de ellos discretamente? ¡Rick Mercenario está aquí para ti!</h3>
            <div className="mercenary-rick__actions">
                { actionMercenaries.length > 0 
                    ? actionMercenaries.map((data)=>(
                    <div key={data.id} className="mercenary-rick__action">
                        <div className="action__details">
                            <div className="action__target">{data.target}</div>
                            <div className="action__context">{data.context}</div>
                            <div className="action__squad">{data.squad}</div>
                        </div> 
                        { (cartClones.length == 0) ? null
                                : (
                                    <select
                                        className="action__button"
                                        onChange={ handlerOnChange }      
                                    >
                                        <option value={0}>-- Select an Option --</option>

                                        { cartClones.map(item =>  (
                                            <option 
                                                key={item.id} 
                                                value={item.id}
                                            >{item.name}</option>
                                            ))
                                        }
                                    </select>
                                )
                        }
                        
                        <button
                            className="action__button" 
                            onClick={ handlerDeleteById }
                        >
                            <span className="action__button__item">Contratar por </span>
                            <div className="action__button__item action__button--price">
                                <span>{data.price}</span>
                                <span>Flurbos</span>
                            </div>
                            <span 
                                className="action__button__item action__button--probability"
                            >Probabilidad: {data.probability}%</span>
                        </button>
                        </div>
                    ))
                    : (<div className="mercenary-rick__action">
                       No Existen Mercenarios
                       </div>)    
                }
            </div>
        </div>
    </>
  )
}
