import { createContext, useState, useEffect } from "react";
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/FirebaseConfig'

export const FavContext = createContext();

export const FavProvider = ({ children }) => {
    const [favorito, setFavorito] = useState([])
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

    const addFav = (id) => {
        const check = favorito.every(item => {
            return item.id !== id;
        })
        if(check) {
            const data = productos.filter(producto => {
                return producto.id === id
            })
            setFavorito([...favorito, ...data])
        }
    }

    useEffect(() => {
        const dataFavorito = JSON.parse(localStorage.getItem('dataFavorito'))
        if (dataFavorito) {
            setFavorito(dataFavorito)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('dataFavorito', JSON.stringify(favorito))
    }, [favorito])

    function removeFav(productoId) {
        const productoEliminado = favorito.filter((producto) => producto.id !== productoId.id);
        setFavorito(productoEliminado);
    }

    const valueFav = {
        favorito: [favorito, setFavorito],
        addFav: addFav,
        removeFav: removeFav
    }

    return (
        <FavContext.Provider value={valueFav}>
            {children}
        </FavContext.Provider>
    )

}


