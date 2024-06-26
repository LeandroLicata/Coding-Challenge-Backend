const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Brand", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    logo_url: {
      type: DataTypes.STRING,
    },
  });
};
