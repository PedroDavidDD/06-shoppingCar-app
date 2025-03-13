
import { useGlobalStore } from '../store/Store'; 
import { FormTableItem } from './';

export const FormTable = () => {

    const cartClones = useGlobalStore(state => state.cartClones);
    const deleteCartClone = useGlobalStore(state => state.deleteCartClone);
    const clearCartClones = useGlobalStore(state => state.clearCartClones);

    function handleDeleteTCItem(id) {
        deleteCartClone( id );
    }

    function handleDeleteAll() {
        clearCartClones();
    }

  return (
    <>
        <h1 className='bg-red-500 text-slate-50 text-center text-3xl'>Tabla De Compras</h1>
        <div className="table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr className='table-dark uppercase'>
                        <th scope="col">ID</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Species</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Location</th>
                        <th scope="col">Element</th>
                        <th scope="col">Rarity</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody className='table-warning'>
                    { <FormTableItem item={ cartClones } onDeleteTCItem={ handleDeleteTCItem } /> }
                </tbody>
            </table>
        </div>
        
        <button className='btn btn-danger' onClick={ handleDeleteAll }>Delete All</button>
   
    </>
    )
}
