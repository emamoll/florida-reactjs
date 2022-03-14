import { createContext, useState, useEffect } from "react";
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/FirebaseConfig'

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])
    const [productos, setProductos] = useState([]);
    const [total, setTotal] = useState(0);

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

    const addItem = (id) => {
        const check = carrito.every(item => {
            return item.id !== id;
        })
        if(check) {
            const data = productos.filter(producto => {
                return producto.id === id
            })
            setCarrito([...carrito, ...data])
        }
    }
    
    useEffect(() => {
        const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
        if (dataCarrito) {
            setCarrito(dataCarrito)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('dataCarrito', JSON.stringify(carrito))
    }, [carrito])

    useEffect(() => {
        const getTotal = () => {
            const res = carrito.reduce((prev, item) => {
                return prev + (item.precio * item.cantidad)
            }, 0)
            setTotal(res)
        }
        getTotal()
    }, [carrito])

    const removeItem = (productoId) => {
        const productoEliminado = carrito.filter((producto) => producto.id !== productoId.id);
        setCarrito(productoEliminado);
     }

    const value = {
        carrito: [carrito, setCarrito],
        addItem: addItem,
        removeItem: removeItem,
        total: [total, setTotal]
    }

    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    )

}


