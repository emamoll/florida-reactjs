import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ( {data} ) => {

    const [contador, setContador] = useState(1);

    const restarCantidad = () => {
        setContador(contador - 1);
    }

    const sumarCantidad = () => {
        setContador(contador + 1)
    }

    const agregarProducto = () => {
        document.getElementById('contenedorAgregar').style.display = 'none';
        document.getElementById('contenedorContador').style.display = 'block';
        setContador(contador + 1)
    }

    return (
        <div>
            <div id='contenedorContador'>
                <div className='contenedorBotonesContador'>
                    <button className='botonContador' id='botonMenos' style={{display: contador === 1 ? 'none' : 'inline' }} onClick={restarCantidad}>-</button>
                    <span style={{marginLeft: contador === 1 ? '40px' : '-45px' }} id='numeroContador' data={contador}>{contador}</span>
                    <button className='botonContador' id='botonMas' onClick={sumarCantidad}>+</button>
                </div>
            </div>
            <div id='contenedorSinStock'style={{display: contador === 9 ? 'block' : 'none' }}>
                <p>SIN STOCK</p>
            </div> 
            <div id='contenedorAgregar'>
                <button id='botonAgregar' onClick={agregarProducto}>Agregar Producto</button>
            </div>
            <div id='contenedorMensajeStock' style={{display: contador === 9 ? 'block' : 'none' }}>
                <p>El stock de este producto es de  unidades</p>
            </div>
        </div>
        );
}

export default ItemCount;
