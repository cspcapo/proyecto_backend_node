import {
  createProduct as createProductModel,
  getProducts,
  getProductById as getProductByIdModel,
  updateProduct as updateProductModel,
  deleteProduct as deleteProductModel,
} from "../models/ProductsModel.js";

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (error) {
    error.status = 500;
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await getProductByIdModel(id);

    if (!product) {
      const err = new Error("Producto no encontrado");
      err.status = 404;
      return next(err);
    }

    res.json(product);
  } catch (error) {
    error.status = 500;
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const { name, price, stock, mark } = req.body;

    if (!name || !price || !stock) {
      const err = new Error("Faltan datos obligatorios");
      err.status = 400;
      return next(err);
    }

    const newProduct = await createProductModel({
      name,
      price,
      stock,
      mark,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    error.status = 500;
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (!updates || Object.keys(updates).length === 0) {
      const err = new Error("Datos de actualización faltantes");
      err.status = 400;
      return next(err);
    }

    const updatedProduct = await updateProductModel(id, updates);
    res.json(updatedProduct);
  } catch (error) {
    error.status = 500;
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteProductModel(id);
    res.status(200).json({ message: "Producto eliminado con éxito", id });
  } catch (error) {
    error.status = 500;
    next(error);
  }
};
