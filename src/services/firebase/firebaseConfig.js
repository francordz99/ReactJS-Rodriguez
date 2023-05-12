
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    // EN ESTA SECCION VAN LOS DATOS DE TU FIREBASE , EN ESTE CASO ESTAN BORRADOS POR RAZONES DE SEGURIDAD.
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
