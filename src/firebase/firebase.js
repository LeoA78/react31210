import { initializeApp } from "firebase/app";
import { addDoc, getFirestore } from "firebase/firestore";
import { getDocs, collection, query, where, doc, getDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



/* Database Connection */

export async function getProducts(idCategory) {
  try {

    const productsCollection = idCategory
      ? query(collection(db, 'products'), where('category', '==', idCategory))
      : collection(db, 'products');

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
    const productCollection = doc(db, 'products', productId);
    const product = await getDoc(productCollection);

    if(!product.data()){
      return [];
    }

    return { ...product.data(), id: product.id };
    
  } catch (error) {
    console.log(error);
  }

}


export async function getCategories() {
  try {

    const categoriesCollection = collection(db, 'categories');

    const categoriesDB = await getDocs(categoriesCollection)
      .then(result => {
        const categories = result.docs.map(category => {
          return { ...category.data(), id: category.id };
        });

        return categories;
      })

    return categoriesDB;

  } catch (error) {
    console.log(error);
  }

}


export async function checkout(collectionName, data) {
  const checkoutCollection = collection(db, collectionName );
  
  const checkout = await addDoc(checkoutCollection, {
    ...data,
  })

  return checkout;
}




