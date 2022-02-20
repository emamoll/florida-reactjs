import React, { useContext } from 'react';
import './Carrito.css';
import ItemCount from '../../ItemCount/ItemCount'
import { CartContext } from '../../CartContext/CartContext';

const Carrito = ({data}) => {

  const [items, setItems] = useContext(CartContext);
  const eliminarItem = (e) => {
    console.log(items);
  }

  return (
    <div className='contenedorItem'>
        <img src={data.imagen} alt={data.nombre} className='imgCarrito'/>
        <h2 className='nombreCarrito' >{data.nombre}</h2>
        <h3 className='precioCarrito' >$ {data.precio} x {data.medida}</h3>
        <ItemCount className="contadorCarrito" />
        <h2 className='totalCarrito'>$ {data.precio}</h2>
        <div className='botonesCarrito'>
            <button className='btnEliminarCarrito' id={data.id} onClick={eliminarItem} >Eliminar</button>
            <button className='btnAgregarCarrito' >Agregar a Favoritos</button>
        </div>
    </div>
  )
}

export default Carrito