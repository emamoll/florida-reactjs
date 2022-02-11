import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
import ItemDetail from '../../components/ItemDetailContainer/ItemDetail/ItemDetail';

const ItemsDetail = () => {

    const [item, setItem] = useState([]);

    // let id = useParams();
    // let itemId = id.id;

    useEffect(() => {
        fetch('json/productos.json')
            .then((response) => response.json())
            .then((json) => setItem(json));
    }, [])
    

    return (
        <div>
           <div>
                   {item.map((producto) => {
                       return (
                           <div key={producto.id}>
                               <ItemDetail datos={producto}/>
                           </div>
                       )
                   }) }
               </div> 
        </div>
    );
};

export default ItemsDetail;
