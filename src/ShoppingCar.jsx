import React, { useState } from 'react'
import { ToyCard } from './components'

export const ShoppingCar = () => {


  return (
    <>
      <div className='container-lg'>
        <h1 className='bg-red-500 text-slate-50 text-center text-3xl'>Productos</h1>        
        <ToyCard />    
      </div>
    </>
  )
}
