import React from 'react';
import './Item.css'

const Item = ({data}) => {
  return (
    <div className='catalogo'>
        <img src ={data.imagen} alt ={data.nombre} className='imgCatalogo'/>
        <h3>{data.nombre}</h3>
        <div>                    
            <h5>${data.precio} x {data.medida}</h5>
        </div>
    </div>
    );
};

export default Item;


                    