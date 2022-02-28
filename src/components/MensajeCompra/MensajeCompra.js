import React from 'react'

const MensajeCompra = ({ compraId }) => {
  return (
    <div>
        <h2>Gracias por su compra!!!</h2>
        <h3>Su número de seguimiento es: {compraId}</h3>
    </div>
  )
}

export default MensajeCompra