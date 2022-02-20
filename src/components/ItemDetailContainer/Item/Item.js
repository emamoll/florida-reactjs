import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Item.css';

const Item = ({datos}) => {

    const navegar = useNavigate()

    const agregarAlCarrito = () => {
        navegar("/carrito")
    }


    return (
        <div className='detalles'>
            <img src={`../${datos.imagen}`} alt={datos.nombre} className='grid1' />
            <h1 className='grid2' >{datos.nombre}</h1>
            <h2 className='grid3' >$ {datos.precio} x {datos.medida}</h2>
            {/* <h3 className='grid4' >{datos.detalle}</h3> */}
            <button className='grid5' onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    );
};

export default Item;
