import React, { useContext } from 'react';
import './Carrito.css';
import ItemCount from '../../ItemCount/ItemCount'
import { CartContext } from '../../../Context/CartContext/CartContext';

const Carrito = () => {

  const [items, setItems] = useContext(CartContext);
  console.log(items);


  return (
    <div className='contenedorItem'>
        <img src={items.imagen} alt={items.nombre} className='imgCarrito'/>
        <h2 className='nombreCarrito' >{items.nombre}</h2>
        <h3 className='precioCarrito' >$ {items.precio} x {items.medida}</h3>
        <ItemCount className="contadorCarrito" />
        <h2 className='totalCarrito'>$ {items.precio}</h2>
        <div className='botonesCarrito'>
            <button className='btnEliminarCarrito' id={items.id} >Eliminar</button>
            <button className='btnAgregarCarrito' >Agregar a Favoritos</button>
        </div>
    </div>
  )
}

export default Carrito