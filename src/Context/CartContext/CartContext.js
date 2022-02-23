import React, {createContext, useState} from "react";

export const CartContext = createContext();

const itemsCarrito = ([])

export const ItemsProvider = ( {children} ) => {
    const [items, setItems] = useState(itemsCarrito);
    console.log(items);
    const isInCart = (itemId) => {
        return items.some((item) => item.id === itemId);
      };
    const addItem = (item) => {
        if (!isInCart(items.id)) {
            console.log(true);
            setItems([...items, item])
        } else {
            console.log(false);
        }
    }
    console.log(items);

    console.log(items);
    
    return (
        <CartContext.Provider value={[items, setItems, addItem]}>
            {children}
        </CartContext.Provider>
    )
}