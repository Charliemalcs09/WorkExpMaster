import './GalleryView.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Datagalleryitem({ product }) {
    const [viewtype, setViewType] = useState(false);

    return (<div className="product-item">

        {viewtype == false ?
            <Link to={`/product/${product.name}`}>
                <img
                    src={`../img/${product.pic}`}
                    alt={product.name}
                    title={`${product.name}(${product.department}) - £${product.price.toFixed(2)}`}
                    onClick={() => setViewType(!viewtype)}
                />
            </Link> :
            <table onClick={() => setViewType(!viewtype)} className="gallery-item">
                <tr>
                    <td>
                        <img src={`../img/${product.pic}`} alt="product pic" className='prod-img' />
                    </td>
                    <td>
                        <p>Department: {product.department}</p>
                        <p>Name: {product.name}</p>
                        <p>Size: {product.size}</p>

                    </td>
                    <td>
                        <p>Price: £{product.price.toFixed(2)}</p>
                        <p>Ratings: {product.ratings}</p>
                    </td>
                </tr>
            </table>}

    </div>
    );
}

export default Datagalleryitem;