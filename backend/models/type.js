'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type extends Model {

    static associate(models) {
      Type.hasMany(models.Food, {
        foreignKey: "typeId",
      });
    }
  }
  Type.init({
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Type',
  });
  return Type;
};