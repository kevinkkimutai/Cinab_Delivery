'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restuarant extends Model {
    static associate(models) {
      Restuarant.hasMany(models.Food, {
        foreignKey: "restuarantId",
      });
    }
  }
  Restuarant.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING
    },
    logo: {
      type: DataTypes.STRING
    },
    location: {
      type: DataTypes.TEXT
    },
    addressOne: {
      type: DataTypes.STRING
    },
    addressTwo: {
      type: DataTypes.STRING
    },
    KraPin: {
      type: DataTypes.INTEGER
    },
    weekdayOpening: {
      type: DataTypes.TIME
    },
    weekdayClossing: {
      type: DataTypes.TIME
    },
    saturdayOpening: {
      type: DataTypes.TIME
    },
    saturdayClossing: {
      type: DataTypes.TIME
    },
    sundayOpening: {
      type: DataTypes.TIME
    },
    sundayClossing: {
      type: DataTypes.TIME
    },
    licence: {
      type: DataTypes.TEXT
    },
    contact: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Restuarant',
  });
  return Restuarant;
};