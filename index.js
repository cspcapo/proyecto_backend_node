import dotenv from "dotenv";
dotenv.config();
//import db from "./firebase.bak";
import db from "./src/config/firebase.js";
import express from "express";
import { addDoc, collection, getDocs } from "firebase/firestore";


import productsRouter from "./src/routers/products.routers.js";
const createProduct = async () => {
  const product = {
    id: "006",
    categoria: "camara",
    marca: "gadnic",
    stock: 10,
  };
  const result = await addDoc(collection(db, "products"), product);
  console.log(result);
};
const app = express();

//app.use("/api/products", productsRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
createProduct();