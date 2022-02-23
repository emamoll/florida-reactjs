import React, { useContext } from 'react';
import './CarritoList.css';
import Carrito from '../CarritoItem/Carrito';
import { CartContext } from '../../../Context/CartContext/CartContext';

const CarritoList = ( {data} ) => {

  const [items, setItems, removeItem] = useContext(CartContext);

  return (
    <div>
        <h1>Tu Carrito</h1>
        
        {items.map((item) => {
          return <Carrito data={item} key={item.id} />
        })}
        
        {items.length !== 0 ? 
          <>
            <div className='contenedorTotal'>
              <h2 className='totalCarrito'>Total de la compra</h2>
              <h2>$1600</h2>
            </div>
            <button className='btnVaciar' onClick={() => removeItem()} style={{ display: (items.length) === 0 ? 'none' : 'block' }}>Vaciar carrito</button>
          </> : <h2 className='carritoVacio'>Su carrito esta vacio</h2> }
        
    </div>
  )
}

export default CarritoList