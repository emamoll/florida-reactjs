import React, { useContext, useState} from 'react';
import './FormularioContainer.css'
import TextField from '@mui/material/TextField';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../Firebase/FirebaseConfig';
import MensajeCompra from '../MensajeCompra/MensajeCompra';
import { StateContext } from '../../Context/Provider/StateProvider';



const initialState = {
  nombre: '',
  apellido: '',
  telefono: '',
  email: '',
  ciudad: '',
  items: ''
}

const FormularioContainer = () => {

  const [datos, setDatos] = useState(initialState);
  const value = useContext(StateContext)
  const [carrito, setCarrito] = value.carrito;

  const [compraId, setCompraId] = useState('')

  const valorIngresado = (e) => {
    const {value, name} = e.target;
    setDatos({...datos, [name]: value})
  }

  const enviar = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, 'compras'), {
      datos
    })
    setCompraId(docRef.id);
    setDatos(initialState);
    setCarrito([])
  }

  return (
    <div className='formularioCont'>
      <h2>Complete con sus datos para finalizar su compra</h2>
      <form className='formulario' onSubmit={enviar}>
        <TextField id="outlined-basic" 
        label="Nombre" 
        variant="outlined" 
        className='inputFormulario'
        name='nombre'
        value={datos.nombre}
        onChange={valorIngresado}/>
        <TextField id="outlined-basic" label="Apellido" variant="outlined" 
        className='inputFormulario'
        name='apellido'
        value={datos.apellido}
        onChange={valorIngresado}/>
        <TextField id="outlined-basic" label="Telefono" variant="outlined" 
        className='inputFormulario'
        name='telefono'
        value={datos.telefono}
        onChange={valorIngresado}/>
        <TextField id="outlined-basic" label="Email" variant="outlined" 
        className='inputFormulario'
        name='email'
        value={datos.email}
        onChange={valorIngresado}/>
        <TextField id="outlined-basic" label="Ciudad" variant="outlined" 
        className='inputFormulario'
        name='ciudad'
        value={datos.ciudad}
        onChange={valorIngresado}/>

        <button className='boton'>Buscar</button>
      </form>

    <div>
      <div>
        {compraId && <MensajeCompra compraId={compraId} /> }
      </div>
    </div>




    </div>
  )
}

export default FormularioContainer