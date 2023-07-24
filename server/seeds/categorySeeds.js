const {Category} = require('../models');

const categoryData = [
	{
		category_name: 'Dogs'
	},
	{
		category_name: 'Cats'
	}

];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;