import React, { createContext, useState} from "react";


export const context = createContext();

const { Provider } = context;

function CustomProvider({ children }) {
    const [cart, setCart] = useState([]);
    
    const addToCart = (item) => {
        isInCart(item) ? updateCart(item) : setCart([...cart, item]);
    }
    
    
    const removeFromCart = (item) => {
        const isConfirmed = window.confirm(`¿Estás seguro que deseas eliminar ${item.title} del carrito?`);
        
        if (isConfirmed) {
        const newCart = cart.filter(cartItem => cartItem.id !== item.id);
        setCart(newCart);
        }
    }
    
    const getAmount = () => {
        return cart.reduce((acc, item) => acc + item.amount, 0);
    }

    const getTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.amount, 0); 
    }

    const getCart = () => {
        return cart;
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
        <Provider value={{addToCart,getAmount, clearCart, removeFromCart, getCart, getTotal, updateCart}}> 
         {children} 
         </Provider>

    );
}

export default CustomProvider;