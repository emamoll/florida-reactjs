import React, { useContext } from 'react';
import { FavContext } from '../../../Context/CartContext/FavContext';
import { StateContext } from '../../../Context/Provider/StateProvider';
import './Carrito.css';

const Carrito = ({ data }) => {

  const value = useContext(StateContext);
  const [carrito, setCarrito] = value.carrito;
  const removeItem = value.removeItem;

  const valueFav = useContext(FavContext);
  const addFav = valueFav.addFav

    const restarCantidad = (id) => {
        carrito.forEach(item => {
          if(item.id === id){
            item.cantidad -= 1
          }
          setCarrito([...carrito])
        });
        if(data.cantidad === 0){
          removeItem(data)
        }
    }

    const sumarCantidad = (id) => {
        carrito.forEach(item => {
          if(item.id === id){
            item.cantidad += 1
          }
          setCarrito([...carrito])
        })
    }

    let restaStock = (data.stock) - data.cantidad;

    let monto = data.precio * data.cantidad;

  return (
  <div className='contenedorItem'>
        <img src={data.imagen} alt={data.nombre} className='imgCarrito'/>
        <h2 className='nombreCarrito' >{data.nombre}</h2>
        <h3 className='precioCarrito' >$ {data.precio} x {data.medida}</h3>
        <div>
          <p className='stockCarrito'>
            Cantidad disponible: {restaStock === 0 ? 'sin stock' : `${restaStock} ${data.medida}`}
          </p>  
           <div id='contenedorContador'>
                <div className='contenedorBotonesContador'>
                    <button className='botonContador' id='botonMenos' onClick={() => restarCantidad(data.id)}>-</button>
                    <span id='numeroContador' style={{marginRight:(restaStock === 0) ? '35px' : '0'}} >{data.cantidad}</span>
                    <button className='botonContador' id='botonMas' style={{display:(restaStock === 0) ? 'none' : 'inline'}} onClick={() => sumarCantidad(data.id)}>+</button>
                </div>
            </div>
        </div>
        <h2 className='totalCarrito'>$ {monto}</h2>
        <div className='botonesCarrito'>
            <button className='btnEliminarCarrito' onClick={() => removeItem(data) } key={data.id} >Eliminar</button>
            <button className='btnAgregarCarrito' onClick={() => addFav(data.id)} >Agregar a Favoritos</button>
        </div>
    </div>
  )
}

export default Carrito