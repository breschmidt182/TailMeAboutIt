const{Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class SubCategory extends Model{}

SubCategory.init(
	{
		id:{
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},

		subCategoryName:{
			type: DataTypes.STRING,
			allowNull: false,
		}
	},
	{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'SubCategory',
  }
)

module.exports = SubCategory