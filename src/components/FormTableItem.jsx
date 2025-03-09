
export const FormTableItem = ({ item, onDeleteTCItem }) => {
  console.log(item)
  return (
    <>
      {
        item.map(({ id, image, name, species, gender, quantity, range, rarity })=>(
            <tr key={ id } className="capitalize">
                <th scope="row">{ id }</th>
                <td><img src={image} alt={name} className="w-32 h-32" /></td>
                <td>{ name }</td>
                <td>{ species }</td>
                <td>{ gender }</td>
                <td>{ range.element }</td>
                <td>{ rarity }</td>
                <td>{ quantity }</td>
                <td>
                  <svg onClick={()=> { onDeleteTCItem(id) }} xmlns="http://www.w3.org/2000/svg" className=" bg-slate-50/0 icon icon-tabler icon-tabler-square-x" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#f00" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <path d="M10 10l4 4m0 -4l-4 4" />
                  </svg>
                </td>
            </tr>
        ))
      }
    </>
  )
}
