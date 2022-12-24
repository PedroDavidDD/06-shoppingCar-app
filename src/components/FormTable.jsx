import React from 'react'

export const FormTable = () => {
  return (
    <>
        <h1 className='bg-red-500'>FormTable</h1>
        <div className="table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr className='table-dark'>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody className='table-warning'>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
    )
}
