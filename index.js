import dotenv from "dotenv";
dotenv.config();
//import db from "./firebase.bak";
import db from "./src/config/firebase.js";
import express from "express";
import { addDoc, collection, getDocs } from "firebase/firestore";


import productsRouter from "./src/routers/products.routers.js";
const app = express();

app.use(express.json());
app.use("/api/products", productsRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
