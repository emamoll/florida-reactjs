import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../../components/ItemDetailContainer/ItemDetail/ItemDetail';
import Cargando from '../../components/Cargando/Cargando'
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/FirebaseConfig'

const ItemsDetail = ({datos}) => {

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
    console.log(itemId);

    return (
        <div>
           <div>
                {item.map((producto) => {
                   return (
                       <div key={producto.id}>
                            {cargando ? (
                                <Cargando />
                            ) : (
                                <ItemDetail datos={producto}/>
                            )}
                       </div>
                   )
               }) }
           </div> 
        </div>
    );
};

export default ItemsDetail;
