import db from "../config/firebase.js";
import { collection, addDoc } from "firebase/firestore";

const productsCollection = collection(db, "products");

 const productsSeeders = 
[
  {
    "mark": "Hikvision",
    "name": "Cámara IP Dome 2MP Full HD",
    "price": 4500.00,
    "stock": 15
  },
  {
    "mark": "Dahua",
    "name": "Cámara Bullet Exterior 4MP",
    "price": 5200.00,
    "stock": 12
  },
  {
    "mark": "Hikvision",
    "name": "DVR 4 Canales 1080p",
    "price": 6800.00,
    "stock": 8
  },
  {
    "mark": "Dahua",
    "name": "DVR 8 Canales 4K con IA",
    "price": 12500.00,
    "stock": 5
  },
  {
    "mark": "Sony",
    "name": "Cámara PTZ 5MP Zoom Óptico 20x",
    "price": 18200.00,
    "stock": 4
  },
  {
    "mark": "Axis",
    "name": "NVR 16 Canales PoE 4K",
    "price": 22000.00,
    "stock": 3
  },
  {
    "mark": "Genérico",
    "name": "Kit Cableado UTP Cat5e 100m",
    "price": 2300.00,
    "stock": 20
  },
  {
    "mark": "Seagate",
    "name": "Disco Duro Vigilancia 2TB",
    "price": 7100.00,
    "stock": 10
  },
  {
    "mark": "Genérico",
    "name": "Fuente de Poder 12V 5A",
    "price": 1800.00,
    "stock": 18
  },
  {
    "mark": "Samsung",
    "name": "Monitor LED 19\" para DVR/NVR",
    "price": 5800.00,
    "stock": 7
  }
]

const createProducts = async () => {
  try {
    console.log("Iniciando seeding de productos de seguridad...");
    
    for (const product of productsSeeders) {
      const docRef = await addDoc(productsCollection, product);
      console.log(`✅ Producto agregado: ${product.name} (ID: ${docRef.id})`);
    }
    
    console.log("🎉 Seeding completado exitosamente!");
  } catch (error) {
    console.error("❌ Error al agregar productos:", error);
  }
};

createProducts();