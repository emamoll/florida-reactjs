import React, {useState, useEffect} from 'react';
import './ItemList.css'
import Item from '../Item/Item';
import { Link } from 'react-router-dom';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../../Firebase/FirebaseConfig'
import Espera from '../../EsperaList/EsperaList';

const ItemList = ({data}) => {

    const [productos, setProductos] = useState([]);
    const [esperando, setEsperando] = useState(true)

    useEffect(() => {
        const catalogoProductos = async () => {
            const q = query(collection(db, 'productos'));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            });
            setProductos(docs);
        };
        setTimeout(() => {
            setEsperando(false)
        }, 2500);
        catalogoProductos()
    }, [])
    
    return (
    <div className="catalogoGrid">
        {productos.map((producto) => {
            return (
                <div key={producto.id}>
                    {esperando ? (
                        <Espera/>
                    ) : (
                        <Link to={`/detail/${producto.id}`} className='link'>
                        <Item data={producto} />    
                    </Link>
                    )}                    
                </div>
            )
        })}

    </div>
    )
};

export default ItemList;
