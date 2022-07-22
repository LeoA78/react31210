import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDocs, collection, query, where, doc, getDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCIwv9wgoDbry9AyeCsQmGuUuK5dw_fFg0",
  authDomain: "comisioncoder.firebaseapp.com",
  projectId: "comisioncoder",
  storageBucket: "comisioncoder.appspot.com",
  messagingSenderId: "544890138126",
  appId: "1:544890138126:web:a19c73827e7abeff41d65f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



/* Database Connection */

export async function getProducts(idCategory) {
  try {

    const productsCollection = idCategory
      ? query(collection(db, 'productos'), where('category', '==', idCategory))
      : collection(db, 'productos');

    const productsDB = await getDocs(productsCollection)
      .then(result => {
        const products = result.docs.map(product => {
          return { ...product.data(), id: product.id };
        });

        return products;
      })

    return productsDB;

  } catch (error) {
    console.log(error);
  }

}

export async function getProduct(productId) {

  try {
    const productCollection = doc(db, 'productos', productId);
    const product = await getDoc(productCollection);

    return { ...product.data(), id: product.id };
    
  } catch (error) {
    console.log(error);
  }

}



