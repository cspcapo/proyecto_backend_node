import dotenv from "dotenv";
dotenv.config();
//import db from "./firebase.bak";
import db from "./src/config/firebase.js";
import express from "express";
import { addDoc, collection, getDocs } from "firebase/firestore";


import productsRouter from "./src/routers/products.routers.js";
import notFound from "./src/middlewares/notFound.middleware.js";

const app = express();

app.use(express.json());
app.use("/api/products", productsRouter);

// Middleware para rutas desconocidas (debe ir después de las rutas)
app.use(notFound);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
