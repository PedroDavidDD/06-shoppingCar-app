import { useGlobalStore } from "../store/Store";

export const FormTableItem = ({ item, onDeleteTCItem }) => {

  return (
    <>
      {
        item.map((dt)=>(
            <tr key={ dt.id } className="capitalize">
                <th scope="row">{ dt.id }</th>
                <td><img src={dt.image} alt={dt.name} className="w-32 h-32" /></td>
                <td>{ dt.name }</td>
                <td>{ dt.species }</td>
                <td>{ dt.gender }</td>
                <td>{ dt.location.name }</td>
                <td>{ dt.range.element }</td>
                <td>{ dt.rarity }</td>
                <td>{ dt.quantity }</td>
                <td>
                  <svg onClick={()=> { onDeleteTCItem(dt.id) }} xmlns="http://www.w3.org/2000/svg" className=" bg-slate-50/0 icon icon-tabler icon-tabler-square-x" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#f00" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
