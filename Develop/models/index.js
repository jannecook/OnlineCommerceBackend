// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Products.belongTo(Category, {
  foreignKey: 'product_id',
})
// Categories have many Products
Category.hasMany(Products, {
  foreignKey: 'product_id',
})
// Products belongToMany Tags (through ProductTag)
Products.belongToMany(Tags, {
  foreignKey: 'product_id',
})
// Tags belongToMany Products (through ProductTag)
Tags.belongToMany(Products, {
  foreignKey: 'product_tag',
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
