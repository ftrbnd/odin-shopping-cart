import React, { useContext, useState } from "react";

const CartContext = React.createContext();
const CartUpdateContext = React.createContext();

export function useCart() {
    return useContext(CartContext);
}

export function useCartUpdate() {
    return useContext(CartUpdateContext);
}

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function updateCart(newItem) {
        const existingItem = cart.find(item => item.id === newItem.id);
        if (!existingItem) return setCart(prevCart => prevCart.concat(newItem));

        const oldCart = [...cart];
        
        oldCart.splice(oldCart.indexOf(existingItem), 1);
        oldCart.push({
            name: existingItem.name,
            price: existingItem.price,
            image: existingItem.image,
            id: existingItem.id,
            quantity: existingItem.quantity + newItem.quantity,
        });

        setCart(oldCart);
    }

    return (
        <CartContext.Provider value={cart}>
            <CartUpdateContext.Provider value={updateCart}>
                { children }
            </CartUpdateContext.Provider>
        </CartContext.Provider>
    )
}