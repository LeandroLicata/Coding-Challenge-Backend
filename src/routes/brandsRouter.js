const { Router } = require("express");

const brandsRouter = Router();

const {
  createBrand,
  getBrands,
  updateBrand,
  deleteBrand,
} = require("../controllers/brandsController");

brandsRouter.post("/", createBrand);

brandsRouter.get("/", getBrands);

brandsRouter.put("/:id", updateBrand);

brandsRouter.delete("/:id", deleteBrand);

module.exports = brandsRouter;
