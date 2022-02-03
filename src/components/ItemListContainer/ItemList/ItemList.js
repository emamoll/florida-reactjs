import React, {useState, useEffect} from 'react';
import './ItemList.css'
import Item from '../Item/Item';

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
                    <Item data={producto} />
                </div>
            )
        })}

    </div>
    )
  
};

export default ItemList;
