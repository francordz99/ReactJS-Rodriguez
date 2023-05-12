import { db } from "./firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

export const getProducts = async () => {
    const productsCollection = collection(db, "products");
    const productsDocsRef = await getDocs(productsCollection);
    const productDocs = productsDocsRef.docs;
    const products = productDocs.map((doc) => {
        return { ...doc.data(), id: doc.id };
    })
    return products;
};

export const getProductById = async (productId) => {
    const products = await getProducts();
    return products.find((prod) => prod.id === productId);
};

export const getProductsByCategory = async (categoryId) => {
    const products = await getProducts();
    return products.filter((prod) => prod.category === categoryId);
};


