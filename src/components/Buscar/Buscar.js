/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import './Buscar.css';
import TextField from '@mui/material/TextField';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/FirebaseConfig';
import { Link } from 'react-router-dom';
import Item from '../ItemListContainer/Item/Item';




const Buscar = () => {

  const [productos, setProductos] = useState([]);
  const [encontrado, setEncotrado] = useState([])
  const [busqueda, SetBusqueda] = useState("")

  useEffect(() => {
    const catalogoProductos = async () => {
        const q = query(collection(db, 'productos'));
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id})
        });
        setProductos(docs);
    };
    catalogoProductos()
}, [])

  const search = (e) => {
    if(e.target.value === ""){
      SetBusqueda('')
    }
    SetBusqueda(e.target.value)
    buscar(e.target.value)    
  }

  const buscar = (productoBuscado) => {
    let resultadoBusqueda = productos.filter((item) => {
      if(item.nombre.toString().toLowerCase().includes(productoBuscado.toLowerCase())
      || item.categoria.toString().toLowerCase().includes(productoBuscado.toLowerCase())) {
        return item;
      }
    })
    setEncotrado(resultadoBusqueda)
  }


  

  return (
    <div>
      <div className='form'>
        <form>
          <TextField id="outlined-basic" label="Buscar producto" variant="outlined" onChange={search} />
          <button className='botonBuscar'>Buscar</button>
        </form> 
      </div>
      <div className='categoriaGrid'>
        {encontrado.length !== 0 ?
          encontrado.map((data) => {
            return (
              <div key={data.id} >
                  <Link to={`/detail/${data.id}`} className='link'>  
                      <Item data={data}/>
                  </Link>
              </div>
            )
        }) :
        <h2 className='buscarVacio'>No realizaste ninguna busqueda</h2>}
      </div>
    </div>
  )
};

export default Buscar