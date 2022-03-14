import React, { useContext } from 'react';
import './Total.css';
import { useNavigate } from 'react-router-dom';
import { StateContext } from '../../Context/Provider/StateProvider';

const Total = () => {

  const value = useContext(StateContext)
  const [carrito, setCarrito] = value.carrito;
  const [total] = value.total

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
        <div id='ventanaConfirmacion'>
          <div className='confirmacion'>
            <p className='mensajeConfirmar'>¿Desea confirmar su compra?</p>
            <button className='btnVentanaConfirmar' onClick={noConfirmar}>No</button>
            <button className='btnVentanaConfirmar' onClick={siConfirmar}>Si</button>
          </div>
        </div>
        <>
            <div className='contenedorTotal'>
                <h2 className='totalCarrito'>Total de la compra</h2>
                <h2>$ {total}</h2>
            </div>            
            <h4 className='totalItems'>Total de productos</h4>
            <h4 className='totalItemsNumero'>{carrito.length}</h4>
            <button className='btnVaciar' onClick={() => setCarrito([])} style={{ display: (carrito.length) === 0 ? 'none' : 'block' }} >Vaciar carrito</button>
            <button className='btnComprar' onClick={(comprar)}>Finalizar Compra</button>
        </>
    </div>
    
  )
}

export default Total;
