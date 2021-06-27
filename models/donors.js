'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class donors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  donors.init({
    user_id: DataTypes.INTEGER,
    mainPost_id: DataTypes.INTEGER,
    donationAmount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'donors',
  });
  return donors;
};