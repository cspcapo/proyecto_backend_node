import db from "../config/firebase.js";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const productsCollection = collection(db, "products");

export const getProducts = async () => {
  const snapshot = await getDocs(productsCollection);
  const products = [];

  snapshot.forEach((docSnap) => {
    products.push({
      id: docSnap.id,
      ...docSnap.data(),
    });
  });

  return products;
};

export const getProductById = async (id) => {
  const docRef = doc(db, "products", id);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
};

export const createProduct = async (product) => {
  const productRef = await addDoc(productsCollection, product);
  return {
    id: productRef.id,
    ...product,
  };
};

export const updateProduct = async (id, updates) => {
  const docRef = doc(db, "products", id);
  await updateDoc(docRef, updates);
  return {
    id,
    ...updates,
  };
};

export const deleteProduct = async (id) => {
  const docRef = doc(db, "products", id);
  await deleteDoc(docRef);
};