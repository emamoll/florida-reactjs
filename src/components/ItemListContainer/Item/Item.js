import React, { useContext, useState } from 'react';
import './Item.css';
import {Card, CardContent, CardMedia, Typography, IconButton} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavContext } from '../../../Context/CartContext/FavContext';

const Item = ({data}) => {

    const [seleccionar, setSeleccionar] = useState('')
    
    const valueFav = useContext(FavContext);
    const addFav = valueFav.addFav;

     const seleccionarFavorito = (e) => {
        e.preventDefault();
        if(setSeleccionar('favorito')) {
            setSeleccionar('')
        }
        addFav(data.id)
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


                    