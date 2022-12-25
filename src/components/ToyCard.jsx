import React, { useState } from 'react'
import { FormTable, ToyCardSection } from './';
import './GridUnsplash.css';
import { useFetch } from '../hooks/useFetch.js';

export const ToyCard = ({ toy }) => {

    const [item, setItem] = useState([]);

    const { data, isLoading } = useFetch(`https://rickandmortyapi.com/api/character/${ toy }`);

    // const { id, image, name, species, gender } = !!data && data
    console.log(data); 

    function onDeleteSection() {
        
    }

    const ContentProductTable = () => {
        return (
            <>
                <ToyCardSection data={ data } setItem={ setItem } item={ item } />
                <FormTable item={ item } />
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
