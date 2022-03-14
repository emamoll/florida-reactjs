import React from 'react';
import './MensajeCompra.css'
import { Link } from 'react-router-dom';
import GifCompra from '../../assets/mensajeCompra.gif'

const MensajeCompra = ({ compraId }) => {
  return (
    <div className='mensajeCompra'>
        <h1>Gracias por su compra!!!</h1>
        <h2 className='compra2'>Su compra se esta preparando</h2>
        <img src={GifCompra} alt='gif panaderia' />
        <h3 className='compra3'>Su código de seguimiento es: {compraId}</h3>
        <Link to={'/'}>
            <p>Ir al inicio</p>
        </Link>
    </div>
  )
}

export default MensajeCompra