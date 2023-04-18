import './ItemCount.css';
import { useState } from 'react';
import React from 'react'


const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > initial) {
            setQuantity(quantity - 1);
        }
    };


    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className="Button" onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="Button" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Añadir Al Carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount