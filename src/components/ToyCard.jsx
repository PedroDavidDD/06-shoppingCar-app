import React, { useState } from 'react'
import './GridUnsplash.css';
import { useFetch } from '../hooks/useFetch.js';
import { ContentProductTable } from './';

export const ToyCard = () => {

    const toy = [1, 2, 3, 4, 5, 6];

    const [item, setItem] = useState([]);

    const [show, setShow] = useState(true);

    const { data, isLoading } = useFetch(`https://rickandmortyapi.com/api/character/${ toy }`);

  return (
    <>
      {
        isLoading ? (<h2>Cargando...</h2>) : ( <ContentProductTable data={ data } item={ item } setItem={ setItem } /> )
      } 
      
      <button className='btn btn-danger ml-3' onClick={()=> setShow(!show)}>test React.memo: {JSON.stringify(show)}</button>
   
    </>
  )
}
