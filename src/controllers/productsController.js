const { Product, Brand } = require("../db");

const createProduct = async (req, res) => {
  try {
    const { name, description, image_url, price, brand } = req.body;

    const newProduct = await Product.create({
      name,
      description,
      image_url,
      price,
    });

    if (brand) {
      const productBrand = await Brand.findOne({
        where: { name: brand },
      });

      if (productBrand) {
        await newProduct.addBrand(productBrand);
      } else {
        console.log("La marca proporcionada no existe en la base de datos.");
      }
    }

    res.status(200).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: {
        model: Brand,
        attributes: ["name", "logo_url"],
      },
    });

    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByPk(id, {
      include: {
        model: Brand,
        attributes: ["name", "logo_url"],
      },
    });

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, image_url, price, brand } = req.body;

    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    if (name) {
      product.name = name;
    }
    if (description) {
      product.description = description;
    }
    if (image_url) {
      product.image_url = image_url;
    }
    if (price) {
      product.price = price;
    }

    await product.save();

    if (brand) {
      const productBrand = await Brand.findOne({
        where: { name: brand },
      });

      if (productBrand) {
        await product.setBrand(productBrand);
      } else {
        console.log("La marca proporcionada no existe en la base de datos.");
      }
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    await product.destroy();

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
