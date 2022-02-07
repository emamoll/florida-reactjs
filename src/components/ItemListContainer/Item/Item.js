import React from 'react';
import './Item.css';
import {Card, CardContent, CardMedia, Typography, IconButton} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Item = ({data}) => {
  return (
    <div>
        <Card sx={{ maxWidth: 500 }} className="tarjetasCatalogo">
            <CardMedia
                component="img"
                height="140"
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
            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
            </IconButton>
        </Card>
    </div>
    );
};

export default Item;


                    