import { Product, validateProduct } from "../models/productModel.js";

export const getProducts = async (req, res) => {
  const movies = await Product.find();
  res.send(movies);
};

export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product)
    return res.status(404).send("The product with the given ID was not found");
  res.send(product);
};

//add product
export const postProduct = async (req, res) => {
  try {
    const { category, title, numberInStock, price, description, url } =
      req.body;
    const item = new Product({
      category,
      title,
      numberInStock,
      price,
      description,
      url,
    });

    await item.save();
    res.send(item);
  } catch (error) {
    res.status(400).send(error.details[0].message);
  }
};

export const updateProduct = async (req, res) => {
  const { error } = validateProduct(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const product = await Product.findById(req.params.id);
  //console.log(product);
  if (!product) return res.status(400).send("Invalid product.");
  const foundProduct = await Product.findByIdAndUpdate(
    req.params.id,
    {
      category: req.body.category,
      title: req.body.title,
      numberInStock: req.body.numberInStock,
      description: req.body.description,
      price: req.body.price,
      url: req.body.url,
    },
    { new: true }
  );

  if (!foundProduct)
    return res.status(404).send("The product with the given ID was not found.");

  res.send(foundProduct);
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.id);
    res.send(product);
  } catch (error) {
    return res.status(404).send("The product with the given ID was not found.");
  }
};
