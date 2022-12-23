const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // id set as primary key for productTag model
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    //reference to product id
    product_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'Product',
          key: 'id'
      },
    },
    //reference to tag id
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'Tag',
          key: 'id'
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
