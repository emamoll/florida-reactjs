import React from 'react';
import './Buscar.css';
import TextField from '@mui/material/TextField';


const Buscar = () => {
  return (
    <div className='form'>
      <form>
        <TextField id="outlined-basic" label="Buscar producto" variant="outlined" />
        <button className='boton'>Buscar</button>
      </form> 
      
    </div>
  )
};

export default Buscar