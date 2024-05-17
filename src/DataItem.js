import React from 'react';

function DataItem({ product }) {

     return (
          <table>
               <tr>
                    <td>
                         <img src={`../img/${product.pic}`} alt="product pic" className='prod-img' />
                    </td>
                    <td>
                         <p>Name: {product.name}</p>
                         <p>Size: {product.size}</p>
                         <p>Department: {product.department}</p>
                    </td>
                    <td>
                         <p>Price: £{product.price.toFixed(2)}</p>
                         <p>Ratings: {product.ratings}</p>
                    </td>
               </tr>
          </table>
     );
}

export default DataItem;