const { Category } = require('../models');
//const sequelize = require('../config/connection');

const categoryData = [
  { 
    // id: 1,
    category_name: 'Shirts',
  },
  {
    // id: 2,
    category_name: 'Shorts',
  },
  {
    // id: 3,
    category_name: 'Music',
  },
  {
    // id: 4,
    category_name: 'Hats',
  },
  {
    // id: 5,
    category_name: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);
//sequelize.sync({ force: true }).then(() => {
  //.then(() => {
  //    console.log('categories created');
 // }).catch((err) => {
  //    console.log('failed to create categories');
  //    console.log(err);
 // })
///});


module.exports = seedCategories;
