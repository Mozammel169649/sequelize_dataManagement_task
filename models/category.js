'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    static associate(models) {
    }
  }
  category.init({
    title: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'category',
  });
  return category;
};