'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DeliveryFee extends Model {

    static associate(models) {
      DeliveryFee.belongsTo(models.Order, {
        foreignKey: "adminId",
      });
    }
  }
  DeliveryFee.init({
    fee: {
      type: DataTypes.FLOAT
    },
    deliveryTime: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'DeliveryFee',
  });
  return DeliveryFee;
};