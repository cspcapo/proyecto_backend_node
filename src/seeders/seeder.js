import db from "../config/firebase.js";
import { collection, addDoc } from "firebase/firestore";

const productsCollection = collection(db, "products");

const productsSeeders = [
  {
    title: "Cámara IP Dome 2MP Full HD",
    description: "Cámara tipo domo con visión nocturna de 30m, conectividad POE y resolución 2MP Full HD.",
    price: 4500.00,
    stock: 15,
    category: "camaras",
    sku: "SEC-001"
  },
  {
    title: "Cámara Bullet Exterior 4MP",
    description: "Cámara resistente IP67 con LED IR de 50m, resolución 4MP ideal para exteriores.",
    price: 5200.00,
    stock: 12,
    category: "camaras",
    sku: "SEC-002"
  },
  {
    title: "DVR 4 Canales 1080p",
    description: "Grabador de video digital con compresión H.265, soporte SATA hasta 6TB y salida HDMI.",
    price: 6800.00,
    stock: 8,
    category: "dvr",
    sku: "SEC-003"
  },
  {
    title: "DVR 8 Canales 4K con IA",
    description: "Grabador con inteligencia artificial para detección de movimiento y reconocimiento facial, soporte 4K.",
    price: 12500.00,
    stock: 5,
    category: "dvr",
    sku: "SEC-004"
  },
  {
    title: "Cámara PTZ 5MP Zoom Óptico 20x",
    description: "Cámara con pan-tilt-zoom, zoom óptico 20x, control RS485 y resolución 5MP.",
    price: 18200.00,
    stock: 4,
    category: "camaras",
    sku: "SEC-005"
  },
  {
    title: "NVR 16 Canales PoE 4K",
    description: "Grabador de red con 16 canales, puertos PoE integrados y soporte para resolución 4K.",
    price: 22000.00,
    stock: 3,
    category: "dvr",
    sku: "SEC-006"
  },
  {
    title: "Kit Cableado UTP Cat5e 100m",
    description: "Kit completo con 100 metros de cable UTP Cat5e, conectores RJ45 y herramienta de crimpado.",
    price: 2300.00,
    stock: 20,
    category: "accesorios",
    sku: "SEC-007"
  },
  {
    title: "Disco Duro Vigilancia 2TB",
    description: "Disco duro WD Purple diseñado para sistemas de vigilancia 24/7, 2TB de capacidad.",
    price: 7100.00,
    stock: 10,
    category: "accesorios",
    sku: "SEC-008"
  },
  {
    title: "Fuente de Poder 12V 5A",
    description: "Fuente de alimentación para 4 cámaras, con protección contra sobrecarga y cortocircuito.",
    price: 1800.00,
    stock: 18,
    category: "accesorios",
    sku: "SEC-009"
  },
  {
    title: "Monitor LED 19\" para DVR/NVR",
    description: "Monitor LED de 19 pulgadas con entradas VGA y HDMI, ideal para sistemas de vigilancia.",
    price: 5800.00,
    stock: 7,
    category: "monitores",
    sku: "SEC-010"
  }
];

const createProducts = async () => {
  try {
    console.log("Iniciando seeding de productos de seguridad...");
    
    for (const product of productsSeeders) {
      const docRef = await addDoc(productsCollection, product);
      console.log(`✅ Producto agregado: ${product.title} (ID: ${docRef.id})`);
    }
    
    console.log("🎉 Seeding completado exitosamente!");
  } catch (error) {
    console.error("❌ Error al agregar productos:", error);
  }
};

createProducts();