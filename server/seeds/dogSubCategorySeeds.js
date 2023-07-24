const SubCategory = require('../models/SubCategory');

const subCatData = [
	{
		category_name:'Walk Neccessities'
	},
	{
		category_name:'Toys and Puzzles'
	},
	{
		category_name:'Treats and Training'
	},
	{
		category_name:'Clothes and Grooming'
	},
	{
		category_name:'Furniture'
	},
	{
		category_name:'For the Hoomans'
	}
]

const seedSubCategories = () => SubCategory.bulkCreate(subCatData);

module.exports = seedSubCategories;