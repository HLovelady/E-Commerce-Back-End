// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // id set as primary key for product model
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      //validate if decimal
      Validate:{
        isDecimal: true
      },
    },

    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      //set default value to 10
      defaultValue: 10,
      //validated that value is numeric
      validate:{
        isNumeric: true
      },
    },
    //reference to category id
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
          model: 'Category',
          key: 'id'
      },
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
