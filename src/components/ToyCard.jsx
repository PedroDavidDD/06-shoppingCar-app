import React from 'react'
import { FormTable, ToyCardSection } from './';
import './GridUnsplash.css';
import { useFetch } from '../hooks/useFetch.js';

export const ToyCard = ({ toy }) => {

  const { data, isLoading } = useFetch(`https://rickandmortyapi.com/api/character/${ toy }`);

    // const { id, image, name, species, gender } = !!data && data

    function onDeleteSection() {
        
    }

    function ContentProductTable() {

        return (
            <>
                <ToyCardSection data={data}/>
                <FormTable />
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
