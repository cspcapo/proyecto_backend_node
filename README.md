# 📱 Proyecto Backend Node.js

**Trabajo práctico final del curso Backend con Node.js**

[![Vercel Deploy](https://img.shields.io/badge/Deploy-Vercel-000?style=flat-square&logo=vercel)](https://proyecto-backend-node-tawny.vercel.app/)

---

## 📋 Descripción

Backend RESTful desarrollado con Node.js y Express para gestión de productos con autenticación JWT.

---

## 🚀 Quick Start

### 1. Inicializar la base de datos
```bash
npm run seeder
```

### 2. Credenciales de prueba
```json
{
  "email": "user@email.com",
  "password": "strongPass123"
}
```

---

## 📝 Crear un Producto

### Datos requeridos
```json
{
  "name": "string (requerido)",
  "price": "number (requerido)",
  "stock": "number (requerido)",
  "mark": "string (requerido)"
}
```

### Ejemplo
```json
{
  "name": "Cámara PTZ WiFi 2MP Interior",
  "price": "50000",
  "stock": "15",
  "mark": "tapo"
}
```

---

## 🔗 Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| `POST` | `/api/auth/login` | Autenticación del usuario |
| `GET` | `/api/products` | Listar todos los productos |
| `POST` | `/api/products` | Crear nuevo producto |
| `GET` | `/api/products/:id` | Obtener producto por ID |
| `PUT` | `/api/products/:id` | Actualizar producto |
| `DELETE` | `/api/products/:id` | Eliminar producto |

---

## 🌐 Deploy

**URL:** https://proyecto-backend-node-tawny.vercel.app/
