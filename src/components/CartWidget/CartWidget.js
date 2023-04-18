import cart from './assets/cart.svg'
import React from 'react'
import './CartWidget.css'

const CartWidget = ({ quantity }) => {
    return (
        <div>
            <img className="icon" src={cart} alt="cart-widget" />
            {quantity}
        </div>
    )
}

export default CartWidget
