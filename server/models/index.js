const Category = require('./Category');
const Product = require('./Product');
const SubCategory = require('./SubCategory');

Category.hasMany(Product, {
	onDelete: 'SET NULL',
	onUpdate: 'CASCADE'
})

SubCategory.hasMany(Product, {
	onDelete: 'SET NULL',
	onUpdate: 'CASCADE'
})

Product.belongsTo(Category,{
	through: 'Category',
	foreignKey: 'category_id'
})

Product.belongsTo(SubCategory,{
	through: 'SubCategory',
	foreignKey: 'subCategory_id'
})

module.exports = {Category, Product, SubCategory};