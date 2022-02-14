import React from 'react';
import './ItemDetail.css';
import Item from '../../ItemDetailContainer/Item/Item';

const ItemDetail = ({datos}) => {
    return (
        <div className='contenedorDetalles'>
            <Item datos={datos} />
        </div>
    );
};

export default ItemDetail;
