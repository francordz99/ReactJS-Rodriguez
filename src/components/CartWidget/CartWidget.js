import cart from './assets/cart.svg'
import React, { useContext } from 'react'
import './CartWidget.css'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' className='CartWidget'>
            <img className="icon" src={cart} alt="cart-widget" />
            {totalQuantity ? <span className="quantity">{totalQuantity}</span> : null}
        </Link>
    )
}

export default CartWidget
