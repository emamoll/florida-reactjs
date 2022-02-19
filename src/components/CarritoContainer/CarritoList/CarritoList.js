import React, { useContext } from 'react';
import './CarritoList.css';
import Carrito from '../CarritoItem/Carrito';
import { CartContext } from '../../CartContext/CartContext';

const CarritoList = () => {

  const [items, setItems] = useContext(CartContext);

  return (
    <div>
        <h1>Tu Carrito</h1>
        {items.map((item) => {
          return <Carrito data={item} key={item.id} />
        })}
        
        <div className='contenedorTotal'>
            <h2 className='totalCarrito'>Total de la compra</h2>
            <h2>$1600</h2>
        </div>
        <button className='btnVaciar' onClick={() => setItems([])} style={{display: (items.length) === 0 ? 'none' : 'block'}} >Vaciar carrito</button> 
    </div>
  )
}

export default CarritoList