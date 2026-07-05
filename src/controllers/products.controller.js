import {
  createProduct as createProductModel,
  getProducts,
  getProductById as getProductByIdModel,
  updateProduct as updateProductModel,
  deleteProduct as deleteProductModel,
} from "../models/ProductsModel.js";

export const getAllProducts = async (req, res) => {
  const products = await getProducts();
  res.json(products);
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await getProductByIdModel(id);

  if (!product) {
    return res.status(404).json({
      message: "Producto no encontrado",
    });
  }

  res.json(product);
};

export const createProduct = async (req, res) => {
  const { name, price, stock } = req.body;

  if (!name || !price || !stock) {
    return res.status(422).json({
      message: "Faltan datos obligatorios",
    });
  }

  const newProduct = await createProductModel({
    name,
    price,
    stock,
  });

  res.status(201).json(newProduct);
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  const updatedProduct = await updateProductModel(id, updates);

  res.json(updatedProduct);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await deleteProductModel(id);

  res.status(204).end();
};
