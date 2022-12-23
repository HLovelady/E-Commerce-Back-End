const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

//create new sequelize model for category
class Category extends Model {}

//initialize category model
Category.init(
  {
    // define columns
    id: {

    }
  },

  //second argument
  {
    //link to database connection (utilizing sequelize)
    sequelize,
    timestamps: false,
    //enforcing that model name is same as table name
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
