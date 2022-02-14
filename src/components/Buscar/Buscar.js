import React from 'react';
import TextField from '@mui/material/TextField';


const Buscar = () => {
  return (
    <div>
      <form  className='form'>
        <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
        <button className='boton'>Buscar</button>
      </form>  
    </div>
  )
}

export default Buscar