const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define(
        "Product",
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: DataTypes.TEXT
            },
            image_url: {
                type: DataTypes.STRING
            },
            price : {
                type: DataTypes.DECIMAL,
            }
        }
    )
}