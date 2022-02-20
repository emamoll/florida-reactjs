import React, {createContext, useState} from "react";

export const CartContext = createContext();

const itemsCarrito = [
    { id: 2, nombre: "Pan Salvado", precio: 160, medida: "kg", imagen: "assets/pannegro.jpg" },
    { id: 9, nombre: "Criollo de Hojaldre", precio: 260, medida: "kg", imagen: "assets/criollo4.jpg" },
    { id: 19, nombre: "Palmeritas", precio: 800, medida: "kg", imagen: "assets/palmerita.jpg" },
    { id: 27, nombre: "Sandwich de Miga Jamón y Queso", precio: 750, medida: "doc", imagen: "assets/sanjyq.jpg" },
    { id: 39, nombre: "Sandwich de Miga Bondiola y Queso (Negro)", precio: 850, medida: "doc", imagen: "assets/sandjyqn.jpg" },
    { id: 42, nombre: "Pebete de Ternera y Queso", precio: 950, medida: "doc", imagen: "assets/pebetetyq.jpg" },
    { id: 45, nombre: "Tortuguita de Ternera y Verdura", precio: 950, medida: "doc", imagen: "assets/tortuguitatyv.jpg" }
]

export const ItemsProvider = ( {children} ) => {
    const [items, setItems] = useState(itemsCarrito);

    return (
        <CartContext.Provider value={[items, setItems]}>
            {children}
        </CartContext.Provider>
    )
}