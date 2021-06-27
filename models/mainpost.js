'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mainPost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  mainPost.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    targetAmount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'mainPost',
  });
  return mainPost;
};