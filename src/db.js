require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_URL } = process.env;

const ProductModel = require("./models/Product");
const BrandModel = require("./models/Brand");
const UserModel = require("./models/User");

const sequelize = new Sequelize(DB_URL, {
  logging: false,
});

ProductModel(sequelize);
BrandModel(sequelize);
UserModel(sequelize);

const { Product, Brand } = sequelize.models;

Brand.hasMany(Product);
Product.belongsTo(Brand);

module.exports = {
  sequelize,
  ...sequelize.models,
};
