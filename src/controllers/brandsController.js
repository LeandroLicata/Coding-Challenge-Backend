const { Brand } = require("../db");

const createBrand = async (req, res) => {
  try {
    const { name, logo_url } = req.body;

    const existingBrand = await Brand.findOne({ where: { name } });
    if (existingBrand) {
      return res.status(400).json({ error: "La marca ya existe" });
    }

    const newBrand = await Brand.create({
      name,
      logo_url,
    });

    res.status(200).json(newBrand);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getBrands = async (req, res) => {
  try {
    const brands = await Brand.findAll();
    res.status(200).json(brands);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, logo_url } = req.body;

    const brand = await Brand.findByPk(id);

    if (!brand) {
      return res.status(404).json({ error: "Marca no encontrada" });
    }

    if (name) {
      brand.name = name;
    }
    if (logo_url) {
      brand.logo_url = logo_url;
    }

    await brand.save();

    res.status(200).json(brand);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteBrand = async (req, res) => {
  try {
    const { id } = req.params;

    const brand = await Brand.findByPk(id);

    if (!brand) {
      return res.status(404).json({ error: "Marca no encontrada" });
    }

    await brand.destroy();

    res.status(200).json({ message: "Marca borrada exitosamente" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createBrand, getBrands, updateBrand, deleteBrand };
