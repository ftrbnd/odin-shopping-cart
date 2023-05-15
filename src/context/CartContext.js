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

    function updateCart(item) {
        setCart(prevCart => prevCart.concat(item));
    }

    return (
        <CartContext.Provider value={cart}>
            <CartUpdateContext.Provider value={updateCart}>
                { children }
            </CartUpdateContext.Provider>
        </CartContext.Provider>
    )
}