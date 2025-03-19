import React, { useEffect } from "react";
import { BotRick, FormTable, ToyCardSection } from "./components";
import { CloneAuction } from "./components/CloneAuction";
import "./components/ShoppingCar.css";
import { MercenaryRick } from "./components/MercenaryRick";
import { useGlobalStore } from "./store/Store";
import { PrisonFromMercenaries } from "./components/PrisonFromMercenaries";
import LoaderWrapper from "./components/LoaderWrapper";
import Layout from "./layout/Layout";

export const ShoppingCar = () => {
  const fetchClones = useGlobalStore((state) => state.fetchClones);
  const clones = useGlobalStore((state) => state.clones);
  const isLoadingClone = useGlobalStore((state) => state.isLoadingClone);
  const cartClones = useGlobalStore((state) => state.cartClones);

  useEffect(() => {
    fetchClones();
  }, [fetchClones]);

  return (
    <Layout>
      <section className="feature-section">
        <h1 className="bg-red-500 text-slate-50 text-center text-3xl">
          Mercado de Clones #230
        </h1>
      </section>

      <LoaderWrapper isLoading={isLoadingClone}>
        <section className="feature-section">
          <ToyCardSection data={clones} />
        </section>
      </LoaderWrapper>

      <section className="feature-section">
        <FormTable />
      </section>

      {cartClones.some((obj) => obj.isHidden) && (
        <section className="feature-section">
          <PrisonFromMercenaries />
        </section>
      )}

      <section className="feature-section">
        <MercenaryRick />
      </section>

      <section className="feature-section container-clone-auction">
        <CloneAuction />
      </section>

      <BotRick />
    </Layout>
  );
};
