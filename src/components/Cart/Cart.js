import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import React from "react";

export const Cart = () => {
    const { cart, clearCart } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className="Cart">
                <h1>No hay items en el carrito</h1>
                <Link to="/" className="Option">
                    Productos
                </Link>
            </div>
        );
    }

    return (
        <div className="Cart">
            {cart.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
            <h3 className="Total">Total: {calculateTotal(cart).toFixed(2)} $</h3>
            <div className="ButtonContainer">
                <button onClick={() => clearCart()} className="Button">
                    Limpiar Carrito
                </button>
                <Link to="/checkout" className="Option Button">
                    Checkout
                </Link>
            </div>
        </div>
    );
};


const calculateTotal = (cart) => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

export default Cart;
