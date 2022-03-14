import React, { useContext } from 'react';
import './Item.css';
import { StateContext } from '../../../Context/Provider/StateProvider';

const Item = ({datos}) => {

    const value = useContext(StateContext);
    const addItem = value.addItem;
    
    return (
        <div className='detalles'>
            <img src={datos.imagen} alt={datos.nombre} className='grid1' />
            <h1 className='grid2' >{datos.nombre}</h1>
            <h2 className='grid3' >$ {datos.precio} x {datos.medida}</h2>
            {/* <h3 className='grid4' >{datos.detalle}</h3> */}
            <button className='grid5' onClick={() => addItem(datos.id)}>Agregar al carrito</button>
        </div>
    );
};

export default Item;
