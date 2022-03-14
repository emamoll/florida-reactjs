import React from 'react';
import {Card, CardContent, CardMedia, Typography} from '@mui/material';
import ImgPanaderia from '../../assets/panaderiaBYN.jpg'

const Espera = ({data}) => {
 return (
    <div>
        <Card sx={{ maxWidth: 500 }} className="tarjetasCatalogo">
            <CardMedia
                component="img"
                height="250"
                image={ImgPanaderia}
                alt="Imagen panaderia blanco y negro"
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                ..........
                </Typography>
                <Typography variant="h5" color="text.secondary">
                ..... x .....
                </Typography>
            </CardContent>
        </Card>
    </div>
    );
};

export default Espera;