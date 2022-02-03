import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({stock}) => {

    const [contador, setContador] = useState(1);

    if (contador <= 0) {
        document.getElementById('contenedorContador').style.display = 'none';
        document.getElementById('contenedorAgregar').style.display = 'block'
    }

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
                <p className='tituloContador'>Cantidad del producto</p>
                <div className='contenedorBotonesContador'>
                    <button className='botonContador' id='botonMenos' onClick={restarCantidad}>-</button>
                    <span id='numeroContador'>{contador}</span>
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
                <p>El stock de este producto es de {stock} unidades</p>
            </div>
        </div>
        );
}

export default ItemCount;
