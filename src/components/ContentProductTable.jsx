
import React from 'react';
import { FormTable, ToyCardSection } from './';

export const ContentProductTable = React.memo(({ data, item, setItem}) => {
    return (
        <>
          <ToyCardSection data={ data } item={ item } setItem={ setItem } />
          <FormTable item={ item } setItem={ setItem } />
        </> 
    )
})