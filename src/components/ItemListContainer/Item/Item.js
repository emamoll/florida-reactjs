import React, { useState } from 'react';
import './Item.css';
import {Card, CardContent, CardMedia, Typography, IconButton} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Item = ({data}) => {

    const [seleccionar, setSeleccionar] = useState('')

    const seleccionarFavorito = (e) => {
        e.preventDefault();
        (seleccionar === 'favorito') ? setSeleccionar('') : setSeleccionar('favorito');
    } 
    

  return (
    <div>
        <Card sx={{ maxWidth: 500 }} className="tarjetasCatalogo">
            <CardMedia
                component="img"
                height="250"
                image={data.imagen}
                alt={data.nombre}
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                {data.nombre}
                </Typography>
                <Typography variant="h5" color="text.secondary">
                $ {data.precio} x {data.medida}
                </Typography>
            </CardContent>
            <IconButton className='contenedorBtnFav' onClick={seleccionarFavorito} aria-label="add to favorites">
                <FavoriteIcon className={seleccionar}/>
            </IconButton>
        </Card>
    </div>
    );
};

export default Item;


                    