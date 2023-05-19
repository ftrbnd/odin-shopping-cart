// import React, { createContext, useContext, useState } from "react";

// export const CartContext = createContext();
// export const CartUpdateContext = createContext();
// export const CartRemoveContext = createContext();

// export function useCart() {
//     return useContext(CartContext);
// }

// export function useCartUpdate() {
//     return useContext(CartUpdateContext);
// }

// export function useCartRemove() {
//     return useContext(CartRemoveContext);
// }

// export function CartProvider({ children }) {
//     const [cart, setCart] = useState([]);

//     function updateCart(newItem) {
//         const existingItem = cart.find(item => item.id === newItem.id);
//         if (!existingItem) return setCart(prevCart => prevCart.concat(newItem));

//         const oldCart = [...cart];
        
//         oldCart.splice(oldCart.indexOf(existingItem), 1);
//         oldCart.push({
//             name: existingItem.name,
//             price: existingItem.price,
//             image: existingItem.image,
//             id: existingItem.id,
//             quantity: existingItem.quantity + newItem.quantity,
//         });

//         setCart(oldCart);
//     }

//     function removeFromCart(removedItem) {
//         const foundItem = cart.find(item => item.id === removedItem.id);
//         const oldCart = [...cart];
        
//         oldCart.splice(oldCart.indexOf(foundItem), 1);

//         setCart(oldCart);
//     }

//     return (
//         <CartContext.Provider value={cart}>
//             <CartUpdateContext.Provider value={updateCart}>
//                 <CartRemoveContext.Provider value={removeFromCart}>
//                    { children }
//                 </CartRemoveContext.Provider>
//             </CartUpdateContext.Provider>
//         </CartContext.Provider>
//     )
// }