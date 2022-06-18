// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKEY: "category_id",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKEY: "category_id",
  onDelete: "CASCADE"
});


// Products belongToMany Tags (through ProductTag)
Tag.belongsToMany(Tag, {
  through:{
    model: ProductTag,
    unique: false
  }
});

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
