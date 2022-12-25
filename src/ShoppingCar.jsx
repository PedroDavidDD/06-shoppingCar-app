import React, { useState } from 'react'
import { ToyCard } from './components'

export const ShoppingCar = () => {

  const [show, setShow] = useState(true);

  return (
    <>
      <div className='container-lg'>
        <h1 className='bg-red-500 text-slate-50 text-center text-3xl'>Productos</h1>        
        <ToyCard />    
        <button className='btn btn-danger' onClick={()=> setShow(!show)}>test: {JSON.stringify(show)}</button>
   
      </div>
    
    </>
  )
}
