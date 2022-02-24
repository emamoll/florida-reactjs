import React, { useContext, useState } from 'react';
import './Carrito.css';
import ItemCount from '../../ItemCount/ItemCount'
import { CartContext } from '../../../Context/CartContext/CartContext';


const Carrito = ({ data }) => {

  const [items, setItems, removeItem] = useContext(CartContext);

  const [subTotal, setSubtotal] = useState(0)

  return (
  <div className='contenedorItem'>
        <img src={data.imagen} alt={data.nombre} className='imgCarrito'/>
        <h2 className='nombreCarrito' >{data.nombre}</h2>
        <h3 className='precioCarrito' >$ {data.precio} x {data.medida}</h3>
        <div>
          <p className='stockCarrito'>Cantidad disponible:{data.stock}</p>
          <ItemCount />
        </div>
        <h2 className='totalCarrito'>$ {subTotal}</h2>
        <div className='botonesCarrito'>
            <button className='btnEliminarCarrito' onClick={() => removeItem(data) } key={data.id} >Eliminar</button>
            <button className='btnAgregarCarrito' >Agregar a Favoritos</button>
        </div>
    </div>
  )
}

export default Carrito