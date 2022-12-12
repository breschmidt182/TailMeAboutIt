const Category = require('./Category');
const Product = require('./Product')

Category.hasMany(Product, {
	onDelete: 'SET NULL',
	onUpdate: 'CASCADE'
})

Product.belongsTo(Category, {
	through: 'Category',
	foreignKey: 'category_id'
})

module.exports = {Category, Product};