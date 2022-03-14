import React, { useContext } from 'react';
import './FavoritoDetail.css'
import {Card, CardContent, CardMedia, Typography} from '@mui/material';
import { FavContext } from '../../../Context/CartContext/FavContext';
import TarroBasura from '../../../assets/basura.png'

const FavoritoDetail = ({data}) => {    
    const valueFav = useContext(FavContext);
    const removeFav = valueFav.removeFav;

    const eliminarFavorito = (e) => {
        e.preventDefault();
        removeFav(data);
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
            <button className='botonBasura' onClick={eliminarFavorito}>
                <img src={TarroBasura} alt='tarro de basura' className='imagenBasura'/>
            </button>
            
        </Card>
    </div>
    );
};

export default FavoritoDetail;