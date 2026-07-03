import { getProducts } from "../models/ProductsModel.js";

export const getAllProducts = async (req, res) => {
  const products = await getProducts();
  res.json(products);
};