import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartItem.css";

const CartItem = ({ item }) => {
    const { removeItem } = useContext(CartContext);

    const handleRemove = () => {
        removeItem(item.id);
    };

    return (
        <div className="CartItem">
            <div className="CartItem-details">
                <h4>{item.name}</h4>
                <p>Precio: {item.price} $</p>
                <p>Cantidad: {item.quantity}</p>
                <button onClick={handleRemove}>Eliminar</button>
            </div>
        </div>
    );
};

export default CartItem;
