import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDvyYZSV7Y0XtmZIUPDUw0qOG9jLxacNmU",
    authDomain: "react-ecommerce-1577a.firebaseapp.com",
    projectId: "react-ecommerce-1577a",
    storageBucket: "react-ecommerce-1577a.appspot.com",
    messagingSenderId: "834908872364",
    appId: "1:834908872364:web:1b06d21adc1edd95458909",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
