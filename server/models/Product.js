const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		productName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		price: {
			type: DataTypes.INTEGER
		},
		stock: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		category_id: {
			type: DataTypes.INTEGER,
			references:{
				model: 'Category',
				key: 'id'
			}
		},
		subCategory_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'SubCategory',
				key: 'id'
			}
		}
	},
	{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
)

module.exports = Product;