import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../../components/ItemDetailContainer/ItemDetail/ItemDetail';
import Cargando from '../../components/Cargando/Cargando'



const ItemsDetail = ({datos}) => {

    const [item, setItem] = useState([]);
    const [cargando, setCargando] = useState(true);

    let id = useParams();
    let itemId = id.id;

    useEffect(() => {
        fetch("../json/productos.json")
          .then((response) => response.json())
          .then((json) => {
            setItem(json.filter((producto) => producto.id === parseInt(itemId)));
          });
          setTimeout(() => {
            setCargando(false);
        }, 2000);
      }, [itemId]); 

    return (
        <div>
           <div>
                {item.map((producto) => {
                   return (
                       <div key={producto.id}>
                            {cargando ? (
                                <Cargando />
                            ) : (
                                <ItemDetail datos={producto}/>
                            )}
                       </div>
                   )
               }) }
           </div> 
        </div>
    );
};

export default ItemsDetail;
