import React, { useState } from 'react'
import { 
  BotRick,
  FormTable,
  ToyCardSection, 
} from './components'
import { useFetch } from './hooks/useFetch';
import { CloneAuction } from './components/CloneAuction';
import './components/ShoppingCar.css'
import { MercenaryRick } from './components/MercenaryRick';

export const ShoppingCar = () => {

  const toy = [1, 2, 3, 4, 5, 6,7, 8, 9];

  const [item, setItem] = useState([]);

  const { data, isLoading } = useFetch(`https://rickandmortyapi.com/api/character/${ toy }`);
  
  return (
    <>
      <header className='header'>Header</header>

      <div className='container-lg pb-48'>

        <section className='feature-section'>
          <h1 className='bg-red-500 text-slate-50 text-center text-3xl'>Mercado de Clones #230</h1>        
        </section>
        {
          isLoading ? (<h2>Cargando...</h2>) : (
            <section className='feature-section'>
              <ToyCardSection data={ data } item={ item } setItem={ setItem } />
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
