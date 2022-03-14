import React, { useState, useEffect } from 'react';
import './ProductosList.css'
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/FirebaseConfig'
import { Link, useParams } from 'react-router-dom';
import Item from '../ItemListContainer/Item/Item';

const ProductosList = () => {

    const [categorias, setCategorias] = useState([]);

    const {categoria} = useParams()

    useEffect(() => {
        const catalogoMercaderia = async () => {
            const q = query(
                collection(db, 'productos'), 
                where('categoria', '==', categoria));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            });
            setCategorias(docs);
        };
        catalogoMercaderia()
    }, [categoria])

    return (
        <div>
            <h1 className='titulo'>{categoria}</h1>
            <div className='categoriaGrid'>
            {categorias.map((data) => {
                return (
                    <div key={data.id} >
                        <Link to={`/detail/${data.id}`} className='link'>  
                            <Item data={data}/>
                        </Link>
                    </div>
                )
            })} 
            </div>
        </div>
    )
}

export default ProductosList;