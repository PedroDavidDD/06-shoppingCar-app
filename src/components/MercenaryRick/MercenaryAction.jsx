import React, { useState } from "react";

export const MercenaryAction = ({ action, cartClones, handleDeleteAction }) => {
  const [selectedCloneId, setSelectedCloneId] = useState(0);

  const handlerOnChange = (event) => {
    setSelectedCloneId(parseInt(event.target.value));
  };

  const selectOptions = {
    byId: (cartClones) => {
      return cartClones.map(({ id, name }) => ({ value: id, label: name }));
    },
    byLocation: (cartClones) => {
      return cartClones.map(({ id, location }) => ({
        value: id,
        label: location.name,
      }));
    },
    byFlurbos: (cartClones) => {
      return cartClones.map(({ id, price }) => ({
        value: id,
        label: price,
      }));
    },
    byAll: () => [],
    byDisabled: (cartClones) => {
      return cartClones.map(({ id, isHidden }) => ({
        value: id,
        label: isHidden ? "Oculto" : "Visible",
      }));
    },
    byEnabled: (cartClones) => {
      return cartClones.map(({ id, isHidden }) => ({
        value: id,
        label: isHidden ? "Mostrar" : "Ya visible",
      }));
    },
    byRandomId: () => [],
    byRandomUpdate: () => [],
    byBetterUpdate: () => [],
  };

  const shouldShowSelect = action.type !== "byRandomId";

  return (
    <div className="mercenary-rick__action">
      <div className="action__details">
        <div className="action__target">{action.target}</div>
        <div className="action__context">{action.context}</div>
        <div className="action__squad">{action.squad}</div>
      </div>

      {shouldShowSelect && cartClones.length > 0 && (
        <select className="action__button" onChange={handlerOnChange}>
          <option value={0}>-- Select an Option --</option>
          {selectOptions[action.type](cartClones).map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      )}

      <button
        className="action__button"
        onClick={() => handleDeleteAction(action.type, selectedCloneId)}
        disabled={shouldShowSelect && !selectedCloneId}
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
