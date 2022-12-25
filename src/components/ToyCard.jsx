import React, { useState } from 'react'
import { FormTable, ToyCardSection } from './';
import './GridUnsplash.css';
import { useFetch } from '../hooks/useFetch.js';

export const ToyCard = React.memo(() => {

    const toy = [1, 2, 3, 4, 5, 6];

    const [item, setItem] = useState([]);

    const { data, isLoading } = useFetch(`https://rickandmortyapi.com/api/character/${ toy }`);

    const ContentProductTable = () => {
        return (
            <>
                <ToyCardSection data={ data } item={ item } setItem={ setItem } />
                <FormTable item={ item } setItem={ setItem } />
            </> 
        )
    }
    
  return (
    <>
      {
        isLoading ? (<h2>Cargando...</h2>) : ( <ContentProductTable /> )
      }
    </>
  )
}
)