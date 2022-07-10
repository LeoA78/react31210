import React, { createContext, useState, useEffect } from "react";


export const context = createContext();

const { Provider } = context;

function CustomProvider({ children }) {
    const [cart, setCart] = useState([]);

    useEffect(() => { // Sólo para ir viendo en el console el estado del carrito
        console.log('Carrito -> ', cart);
    }, [cart]);

    const addToCart = (item) => {
        isInCart(item) ? updateCart(item) : setCart([...cart, item]);
    }
    
    const removeFromCart = (item) => {
        const newCart = cart.filter(cartItem => cartItem.id !== item.id);
        setCart(newCart);
    }
    
    const getAmount = () => {
        return cart.reduce((acc, item) => acc + item.amount, 0);
    }
    
    const clearCart = () => {
        setCart([]);
    }
    
    const updateCart = (item) => {
        const newCart = cart.map(cartItem => {
            if (cartItem.id === item.id) {
                cartItem.amount += item.amount;
            }
            return cartItem;
        }
        );
        setCart(newCart);
    }

    const isInCart = (item) => {
        return cart.some(itemCart => itemCart.id === item.id);
    }

    return (
        <Provider value={{addToCart,getAmount, clearCart, removeFromCart}}> 
         {children} 
         </Provider>

    );
}

export default CustomProvider;