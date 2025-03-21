import React from "react";
import "./MercenaryRick.css";
import { useGlobalStore } from "../store/Store";
import { MercenaryAction } from "./MercenaryRick/MercenaryAction";

export const MercenaryRick = () => {
  const flurbosCoints = useGlobalStore((state) => state.flurbosCoints);
  const addFlurbosCoints = useGlobalStore((state) => state.addFlurbosCoints);

  const cartClones = useGlobalStore((state) => state.cartClones);
  const updateCartClone = useGlobalStore((state) => state.updateCartClone);

  const deleteCartClone = useGlobalStore((state) => state.deleteCartClone);
  const deleteRandomCartClone = useGlobalStore(
    (state) => state.deleteRandomCartClone
  );
  const deleteGenocidalCartClone = useGlobalStore(
    (state) => state.deleteGenocidalCartClone
  );
  const clearCartClones = useGlobalStore((state) => state.clearCartClones);

  const actionMercenaries = useGlobalStore((state) => state.actionMercenaries);

  const deleteActions = {
    byRandomId: () => deleteRandomCartClone(),
    byId: (id) => deleteCartClone(id),
    byLocation: (id) => {
      const tempObj = cartClones.find((obj) => obj.id === id);
      deleteGenocidalCartClone(tempObj?.location.name);
    },
    byAll: () => clearCartClones(),
    byFlurbos: (id) => {
      const tempObj = cartClones.find((obj) => obj.id === id);
      deleteCartClone(id);
      addFlurbosCoints(tempObj?.price);
    },
    byDisabled: (id) => updateCartClone(id, { isHidden: true }),
    byEnabled: (id) => updateCartClone(id, { isHidden: false }),
    byRandomUpdate: () => console.log("first"),
    byBetterUpdate: () => console.log("first 2"),
  };

  const handleDeleteAction = (type, selectedCloneId) => {
    if (!cartClones.length) {
      console.info(`Primero compra un clon`);
      return;
    }

    const actionsWithoutClone = new Set(["byAll", "byRandomId"]);

    const isSelectionRequired = !actionsWithoutClone.has(type);

    const selectedClone = isSelectionRequired
      ? cartClones.find(({ id }) => id === selectedCloneId)
      : true;

    if (!selectedClone) {
      console.warn(`No se encontró el clon seleccionado`);
      return;
    }

    deleteActions[type]?.(selectedCloneId);
  };

  return (
    <>
      <div className="feature-section__container-subtitle mercenary-rick">
        <span>🔫</span>
        <h2>Rick Mercenario</h2>
        <h2>{flurbosCoints}</h2>
      </div>
      <div className="mercenary-rick__container overflow-auto max-h-[37rem]">
        <h3>
          ¿Problemas con tus clones? ¿Necesitas deshacerte de ellos
          discretamente? ¡Rick Mercenario está aquí para ti!
        </h3>
        <div className="mercenary-rick__actions">
          {actionMercenaries.length > 0 ? (
            actionMercenaries.map((data) => (
              <MercenaryAction
                key={data.id}
                action={data}
                cartClones={cartClones}
                handleDeleteAction={handleDeleteAction}
              />
            ))
          ) : (
            <div className="mercenary-rick__action">
              No Existen Mercenarios Disponibles
            </div>
          )}
        </div>
      </div>
    </>
  );
};
