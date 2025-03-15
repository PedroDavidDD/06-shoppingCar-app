
export const ToyCardItem = ({ id, image, name, species, gender, dimension, location, origin, onToyCardItem, quantity = 1, range, rarity, price, isHidden }) => {
  return (
    <div className="card">
      <div className='cardImg'>
        <div className="cardImg__element">
          <div className='cardImg__details cardImg__details--name'>
            <span className='cardImg__name capitalize'>{ name }</span>
            <span className='cardImg__name capitalize'>{ species }</span>
          </div>
          <div className='cardImg__details cardImg__details--flags' onClick={ () => onToyCardItem( { id, image, name, species, gender, dimension, origin, location, quantity, range, rarity, price, isHidden } ) }>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.5 3c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5zm-.5 7v-2h-2v-1h2v-2l3 2.5-3 2.5zm-11.248-2l-.564-2h5.993c-.115.482-.181.983-.181 1.5l.025.5h-5.273zm6.248 11.5c0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5zm-14-16.5l.743 2h1.929l3.474 12h13.239l1.307-3.114c-.387.072-.785.114-1.192.114-.338 0-.666-.034-.99-.083l-.455 1.083h-10.428l-3.432-12h-4.195zm9 16.5c0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5z"/></svg> 
          </div>
        </div>
        <div className="cardImg__element cardImg__element--imagen">
          <img src={ image } alt={ id } />   
          <span className='cardImg__name imagen__name imagen__name--first capitalize'>{ name }</span>
          <span className='cardImg__name imagen__name imagen__name--last capitalize'>{ rarity }</span>
          <span className='cardImg__name imagen__name imagen__name--lastRight capitalize'>{ rarity }</span>
        </div>
      </div>
    </div>
  )
}

