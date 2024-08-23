import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({ user : req.user.id }).populate("user");
    res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { title, description, date, quantity } = req.body; 
    const newProduct = new Product({
      title,
      description,
      date,
      quantity, 
      user: req.user.id,
    });
    await newProduct.save();
    res.json(newProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct)
      return res.status(404).json({ message: "Producto no encontrado" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { title, description, date, quantity } = req.body; 
    const productUpdated = await Product.findOneAndUpdate(
      { _id: req.params.id },
      { title, description, date, quantity }, 
      { new: true }
    );
    return res.json(productUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Producto no encontrado" });
    return res.json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
