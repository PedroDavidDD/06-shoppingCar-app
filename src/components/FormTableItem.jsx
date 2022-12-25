import React from 'react'

export const FormTableItem = ({ item }) => {
  return (
    <>
    {
      item.map(({ id, image, name, species, gender, quantity })=>(
          <tr key={ id }>
              <th scope="row">{ id }</th>
              <td>{ image }</td>
              <td>{ name }</td>
              <td>{ species }</td>
              <td>{ gender }</td>
              <td>{ quantity }</td>
          </tr>
      ))
    }
    </>
  )
}
