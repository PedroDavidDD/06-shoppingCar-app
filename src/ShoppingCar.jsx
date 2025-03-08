import React, { useState } from 'react'
import { 
  BotRick,
  FormTable,
  ToyCardSection, 
} from './components'
import { CloneAuction } from './components/CloneAuction';
import './components/ShoppingCar.css'
import { MercenaryRick } from './components/MercenaryRick';
import { useGlobalStore } from './store/store';

export const ShoppingCar = () => {

  const [item, setItem] = useState([]);

  const clones = useGlobalStore((state) => state.clones);
  const isLoadingClone = useGlobalStore((state) => state.isLoadingClone);

  return (
    <>
      <header className='header'>Header</header>

      <div className='container-lg pb-48'>

        <section className='feature-section'>
          <h1 className='bg-red-500 text-slate-50 text-center text-3xl'>Mercado de Clones #230</h1>        
        </section>
        {
          isLoadingClone ? (<h2>Cargando...</h2>) : (
            <section className='feature-section'>
              <ToyCardSection data={ clones } item={ item } setItem={ setItem } />
              <FormTable item={ item } setItem={ setItem } />
            </section>
          )
        }

        <section className='feature-section'>
          <MercenaryRick />
        </section>

        <section className='feature-section container-clone-auction'>
          <CloneAuction />
        </section>
        

      </div>

      <BotRick />

      <footer className='footer'>
        La Ciudadela de los Ricks no se hace responsable por clones defectuosos, rebeliones, duplicados malvados o paradojas temporales.
      </footer>
    </>
  )
}
