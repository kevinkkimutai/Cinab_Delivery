'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    static associate(models) {
      Food.belongsTo(models.Restuarant, {
        foreignKey: "restuarantId",
      });
      Food.belongsTo(models.Type, {
        foreignKey: "typeId",
      });
      Food.belongsTo(models.Category, {
        foreignKey: "categoryId",
      });
    }
  }
  Food.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },
    restuarantId: {
      type: DataTypes.INTEGER,
      onUpdate: "cascade",
      onDelete: "cascade",
      references: { model: "restuarants", key: "id" },
    },
    categoryId: {
      type: DataTypes.INTEGER,
      onUpdate: "cascade",
      onDelete: "cascade",
      references: { model: "categories", key: "id" },
    },
    typeId: {
      type: DataTypes.INTEGER,
      onUpdate: "cascade",
      onDelete: "cascade",
      references: { model: "types", key: "id" },
    },
    price: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Food',
  });
  return Food;
};