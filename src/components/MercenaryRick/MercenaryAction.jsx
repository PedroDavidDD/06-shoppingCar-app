import React, { useState } from "react";

export const MercenaryAction = ({ action, cartClones, handleDeleteAction }) => {
    const [selectedCloneId, setSelectedCloneId] = useState(0);

    const handlerOnChange = (event) => {
        setSelectedCloneId(parseInt(event.target.value));
    };

    return (
        <div className="mercenary-rick__action">
            <div className="action__details">
                <div className="action__target">{action.target}</div>
                <div className="action__context">{action.context}</div>
                <div className="action__squad">{action.squad}</div>
            </div>

            {cartClones.length > 0 && (
                <select className="action__button" onChange={handlerOnChange}>
                    <option value={0}>-- Select an Option --</option>
                    {cartClones.map((item) => (
                        <option key={item.id} value={item.id}>
                            {item.name} - {item.location.name}
                        </option>
                    ))}
                </select>
            )}

            <button
                className="action__button"
                onClick={() => handleDeleteAction(action.type, selectedCloneId)}
            >
                <span className="action__button__item">Contratar por </span>
                <div className="action__button__item action__button--price">
                    <span>{action.price}</span>
                    <span>Flurbos</span>
                </div>
                <span className="action__button__item action__button--probability">
                    Probabilidad: {action.probability}%
                </span>
            </button>
        </div>
    );
};
