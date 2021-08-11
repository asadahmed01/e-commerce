import { Product, validateProduct } from "../models/productModel.js";

export const getProducts = async (req, res) => {
  const movies = await Product.find();
  res.send(movies);
};

export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.send(product);
};
//get product by id

//  if (!mongoose.Types.ObjectId.isValid(req.params.id))
