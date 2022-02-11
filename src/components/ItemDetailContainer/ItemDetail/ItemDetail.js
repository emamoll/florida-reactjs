import React, { useEffect, useState } from 'react';
import './ItemDetail.css';
import Item from '../../ItemDetailContainer/Item/Item';
import Cargando from '../../Cargando/Cargando'

const ItemDetail = () => {

    const [datos, setDatos] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch('json/productos.json')
        .then((response) => response.json())
        .then((json) => setDatos(json));
        setTimeout(() => {
            setCargando(false);
        }, 2000);
    }, [])

    console.log('datos', datos);

    return (
        <div className='contenedorDetalles'>
           {cargando ? (
                <Cargando />
            ) : (
                    <Item datos={datos} />
            )}
        </div>
    );
};

export default ItemDetail;
