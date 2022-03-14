import React, { useEffect, useState } from 'react';
import './ItemDetail.css'
import { useParams } from 'react-router';
import Cargando from '../../Cargando/Cargando'
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../../Firebase/FirebaseConfig'
import Item from '../../ItemDetailContainer/Item/Item';

const ItemDetail = ({datos}) => {

    const [item, setItem] = useState([]);
    const [cargando, setCargando] = useState(true);

    let id = useParams();
    let itemId = id.id;
      
    useEffect(() => {
        const detallesProductos = async () => {
            const q = query(collection(db, 'productos'));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            });
            setItem(docs.filter((producto) => producto.id === itemId)); 
        };
        setTimeout(() => {
                setCargando(false);
            }, 2000);
        detallesProductos()
    }, [itemId])

    return (
        <div>
           <div>
                {item.map((producto) => {
                   return (
                       <div key={producto.id}>
                            {cargando ? (
                                <Cargando />
                            ) : (
                                <Item datos={producto}/>
                            )}
                       </div>
                   )
               }) }
           </div> 
        </div>
    );
};

export default ItemDetail;
