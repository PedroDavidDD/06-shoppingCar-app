import React, { useState } from 'react'
import { 
  ContentProductTable, 
} from './components'
import { useFetch } from './hooks/useFetch';

export const ShoppingCar = () => {

  const toy = [1, 2, 3, 4, 5, 6,7, 8, 9];

  const [item, setItem] = useState([]);

  const { data, isLoading } = useFetch(`https://rickandmortyapi.com/api/character/${ toy }`);
  
  return (
    <>
      <div className='container-lg'>
        <h1 className='bg-red-500 text-slate-50 text-center text-3xl'>Interdimensional Portal de Clones</h1>        
        {
          isLoading ? (<h2>Cargando...</h2>) : (
            <ContentProductTable 
              data={ data } 
              item={ item } 
              setItem={ setItem }
            /> 
          )
        } 



      </div>
    </>
  )
}
