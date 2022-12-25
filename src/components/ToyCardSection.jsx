import { ToyCardItem } from './'

export const ToyCardSection = ({ data, setItem, item }) => {
  
  // console.log('Me repito en ToyCardSection');

  function handleAddToyCardItem( objItem ) {
    // console.log('Dato: ',objItem); 
    let temp = [...item];
    const repeatObjItem = temp.filter( it => it.id === objItem.id);
    // console.log(repeatObjItem);  
    if(repeatObjItem.length === 0){
      temp.push( objItem );
      // console.log('Datos Agregados: ',temp); 
    }else{
      // console.log('aumento cantidad en el objeto alterando el "temp": ',repeatObjItem); 
      repeatObjItem[0].quantity = repeatObjItem[0].quantity + 1;
    }
    setItem( temp );
  }

  return (
    <>
        <div className="card-grid my-5">
        {
          !!data && data.map(( image )  => (
          <ToyCardItem
              key={ image.id}
              { ...image }
              onToyCardItem={ handleAddToyCardItem }
          />
          ))
        } 
        </div>
    </>
  )
}
