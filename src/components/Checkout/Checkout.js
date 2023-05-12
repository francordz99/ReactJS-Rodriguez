import "./Checkout.css";
import { db } from "../../services/firebase/firebaseConfig";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { useState } from "react";
import { useContext } from "react";
import React from "react";
import { CartContext } from "../../context/CartContext";
import { Timestamp, writeBatch, collection, getDocs, query, where, documentId, addDoc } from "firebase/firestore";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState("");

    const { cart, total, clearCart } = useContext(CartContext);
    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);

        try {
            const objOrder = {
                buyer: {
                    name,
                    phone,
                    email,
                },
                items: cart,
                date: Timestamp.fromDate(new Date()),
            };

            if (typeof total !== 'undefined') {
                objOrder.total = total;
            }

            const batch = writeBatch(db);

            const outOfStock = [];

            const ids = cart.map((prod) => prod.id);

            const productsRef = collection(db, "products");

            const productsAddedFromFirestore = await getDocs(
                query(productsRef, where(documentId(), "in", ids))
            );

            const { docs } = productsAddedFromFirestore;

            docs.forEach((doc) => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productAddedToCart = cart.find((prod) => prod.id === doc.id);
                const prodQuantity = productAddedToCart ? productAddedToCart.quantity : null;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();

                const orderRef = collection(db, "orders");

                const orderAdded = await addDoc(orderRef, objOrder);

                setOrderId(orderAdded.id);
                clearCart();
            } else {
                console.error("Hay productos que no estan en stock");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h1 className="Dialog">Se está generando tu orden!</h1>;
    }

    if (orderId) {
        return (
            <h1 className="Dialog">
                Muchas gracias por comprar! , el identificador de tu orden es : {orderId}
            </h1>
        );
    }


    return (
        <div className="CheckoutContainer">
            <div className="Checkout">
                <h1>Checkout</h1>
                <CheckoutForm onConfirm={createOrder} />
            </div>
        </div>
    );
};

export default Checkout;
