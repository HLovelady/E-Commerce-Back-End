const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

//create new sequelize model for category
class Category extends Model {}

//initialize category model
Category.init(
  {
    // id set as primary key for category model
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },

  //second argument
  {
    //link to database connection (utilizing sequelize)
    sequelize,
    timestamps: false,
    //enforcing that model name is same as table name
    //Prevent sequelize from renaming the table
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
