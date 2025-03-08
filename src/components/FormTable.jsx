
import { FormTableItem } from './';

export const FormTable = ({ item, setItem }) => {


    function handleDeleteTCItem(id) {
        let temp = [...item];
        const repeatObjItem = temp.filter( it => it.id === id);
        // console.log(repeatObjItem);  
        if (repeatObjItem[0].quantity == 1){
            const newListItem = temp.filter((element)=> element.id != id );
            setItem(newListItem);
        }else{
            if(repeatObjItem.length != 0){
                repeatObjItem[0].quantity = repeatObjItem[0].quantity - 1;
                setItem(temp);
            }
        }   
    }

    function handleDeleteAll() {
        const temp = [...item];
        if (temp.length === 0) return;
        setItem([]);
    }

  return (
    <>
        <h1 className='bg-red-500 text-slate-50 text-center text-3xl'>Tabla De Compras</h1>
        <div className="table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr className='table-dark'>
                        <th scope="col">ID</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Species</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody className='table-warning'>
                    { <FormTableItem item={ item } onDeleteTCItem={ handleDeleteTCItem } /> }
                </tbody>
            </table>
        </div>
        
        <button className='btn btn-danger' onClick={ handleDeleteAll }>Delete All</button>
   
    </>
    )
}
