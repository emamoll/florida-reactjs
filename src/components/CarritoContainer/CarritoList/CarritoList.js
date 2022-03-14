import React, { useContext } from 'react';
import './CarritoList.css';
import Carrito from '../CarritoItem/Carrito';
import Total from '../../Total/Total';
import { StateContext } from '../../../Context/Provider/StateProvider';

const CarritoList = ( {data} ) => {
  const value = useContext(StateContext)
    const [carrito] = value.carrito

  return (
    <div>
        <h1 className='titulo'>Tu Carrito</h1>
        
        {carrito.map((item) => {
          return <Carrito data={item} key={item.id} />
        })}
        
        {carrito.length !== 0 ? 
          <Total/> : 
          <h2 className='carritoVacio'>Su carrito esta vacio</h2> 
        }
        
    </div>
  )
}

export default CarritoList