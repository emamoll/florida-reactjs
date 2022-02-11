import React, {useState, useEffect} from 'react';
import './ItemList.css'
import Item from '../Item/Item';
import { Link } from 'react-router-dom';

const ItemList = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('json/productos.json')
            .then((response) => response.json())
            .then((json) => setProductos(json));
    }, [])

    

  return (
    <div className="catalogoGrid">
        {productos.map((producto) => {
            return (
                <div key={producto.id}>
                    <Link to={`/detail/${producto.id}`} className='link'>
                        <Item data={producto} />    
                    </Link>
                    
                </div>
            )
        })}

    </div>
    )
};

export default ItemList;
