import React, {useState, useEffect} from 'react';
import './ItemList.css'
import Item from '../Item/Item';
import { Link } from 'react-router-dom';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../../Firebase/FirebaseConfig'

const ItemList = ({data}) => {

    const [productos, setProductos] = useState([]);

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
        catalogoProductos()
    }, [])
    return (
    <div className="catalogoGrid">
        {productos.map((producto) => {
            return (
                <div key={producto.id}>
                    <Link to={`/detail/${producto.id}`} className='link'>
                        <Item data={producto} />    
                    </Link>
                    
                </div>
            )
        })}

    </div>
    )
};

export default ItemList;
