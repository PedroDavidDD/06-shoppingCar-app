import React, { useState } from 'react'
import { ToyCard } from './components'

export const ShoppingCar = () => {

  const [toy, setToy] = useState([5,3,2,1,4])

  return (
    <>
    <h1>Carrito De Compras</h1>
    <ToyCard toy={ toy } />
    
    </>
  )
}
