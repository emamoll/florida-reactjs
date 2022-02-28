import React, { useContext } from 'react';
import './CarritoList.css';
import Carrito from '../CarritoItem/Carrito';
import { CartContext } from '../../../Context/CartContext/CartContext';
import { useNavigate } from 'react-router-dom';

const CarritoList = ( {data} ) => {

  const [items, setItems] = useContext(CartContext);
  const navigate = useNavigate();


  const comprar = () => {
    document.getElementById('ventanaConfirmacion').style.display = 'block'
  }

  const noConfirmar = () => {
    document.getElementById('ventanaConfirmacion').style.display = 'none'
  }

  const siConfirmar = () => {
    navigate('/formulario');
  }

  return (
    <div>
        <h1>Tu Carrito</h1>
        
        {items.map((item) => {
          return <Carrito data={item} key={item.id} />
        })}

        <div id='ventanaConfirmacion'>
          <div className='confirmacion'>
            <p className='mensajeConfirmar'>¿Desea confirmar su compra?</p>
            <button className='btnVentanaConfirmar' onClick={noConfirmar}>No</button>
            <button className='btnVentanaConfirmar' onClick={siConfirmar}>Si</button>
          </div>
        </div>
        
        {items.length !== 0 ? 
          <>
            <div className='contenedorTotal'>
              <h2 className='totalCarrito'>Total de la compra</h2>
              <h2>$1600</h2>
            </div>
            <button className='btnVaciar' onClick={() => setItems([])} style={{ display: (items.length) === 0 ? 'none' : 'block' }}>Vaciar carrito</button>
            <button className='btnComprar' onClick={(comprar)}>Finalizar Compra</button>
          </> : 
          <h2 className='carritoVacio'>Su carrito esta vacio</h2> 
        }
        
    </div>
  )
}

export default CarritoList