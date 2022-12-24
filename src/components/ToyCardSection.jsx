import React from 'react'
import { ToyCardItem } from './'

export const ToyCardSection = ({ data }) => {
  return (
    <>
        <div className="card-grid">
        {
            !!data && data.map(( image )  => (
            <ToyCardItem
                key={image.id}
                { ...image }
            />
            ))
        } 
        </div>
    </>
  )
}
