import dotenv from "dotenv";
dotenv.config();
import db from "./firebase.js";
import express from "express";
import { addDoc, collection, getDocs } from "firebase/firestore";

import productsRouter from "./src/routers/products.routers.js";

const crateProduct = async () => {
  const product = {
    id: "005",
    categoria: "camara",
    marca: "ezvis",
    stock: 10,
  };

  try {
    const result = await addDoc(collection(db, "products"), product);
    console.log("Documento agregado con ID:", result.id);
  } catch (error) {
    console.error("Error al agregar el producto a Firestore:", error);
  }
};

const app = express();
app.use("/api/products", productsRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

await crateProduct();