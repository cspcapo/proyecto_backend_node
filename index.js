import dotenv from "dotenv";
dotenv.config();
import db from "./src/config/firebase.js";
import express from "express";
import { addDoc, collection, getDocs } from "firebase/firestore";
import productsRouter from "./src/routers/products.routers.js";
import authRouter from "./src/routers/auth.routers.js";
import notFound from "./src/middlewares/notFound.middleware.js";
import errorHandler from "./src/middlewares/error.middleware.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/products", productsRouter);
app.use("/api/auth", authRouter);
// `express.json()` already handles JSON body parsing.

// Middleware para rutas desconocidas
app.use(notFound);

// Middleware global de manejo de errores
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
