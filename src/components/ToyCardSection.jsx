
import { useGlobalStore } from '../store/Store';
import { ToyCardItem } from './'

export const ToyCardSection = ({ data }) => {
  
  const addCartClone = useGlobalStore(state => state.addCartClone);

  return (
    <>
        <div className="card-grid my-5">
        {
          !!data && data.map(( image )  => (
          <ToyCardItem
              key={ image.id}
              { ...image }
              onToyCardItem={ objItem => addCartClone(objItem) }
          />
          ))
        } 
        </div>
    </>
  )
}
