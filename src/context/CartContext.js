import { createContext, useState, useEffect } from "react";
import React from 'react'

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0,
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        let quantity = 0;
        cart.forEach(item => {
            quantity += item.quantity;
        });
        setTotalQuantity(quantity);
    }, [cart])

    const [totalQuantity, setTotalQuantity] = useState(0);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }])
        }
        else {
            console.error('El producto ya estaba en el carrito');
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity }}>
            {children}
        </CartContext.Provider>
    )

}
