'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
    }
  }
  Post.init({
    title: DataTypes.STRING,
    user_id: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};