const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  _id: String,
  productName: String,
  price: Number,
  strikedPrice: Number,
  imageUrl: String,
  prodHighlights: String,
  longDesc: String,
  shortDesc: String,
  ratings: Number,
  numberOfRatings: String,
  discount: Number,
  brand: String,
});

const ProductModel = mongoose.model("products", productSchema);

module.exports = ProductModel;
