import React, {createContext, useState} from "react";

export const CartContext = createContext();

export const ItemsProvider = ( {children} ) => {
    const [items, setItems] = useState([]);

    const isInCart = (productoId) => {
        return items.some((producto) => producto.id === productoId);
      };
    
      const addItem = (producto) => {
        if (!isInCart(producto.id)) {
            setItems([...items, producto])
        }
    }

    const removeItem = () => {
        console.log('click');
    }
    
    
    return (
        <CartContext.Provider value={[items, setItems, addItem, removeItem]}>
            {children}
        </CartContext.Provider>
    )
}