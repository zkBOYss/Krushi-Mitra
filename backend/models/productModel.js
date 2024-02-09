const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
		required: [true, "Name is required"],
	},
	quantity: {
		type: Number,
		unique: false,
		required: [true, "Quantity is required"],
	},
	price: {
		type: Number,
		unique: true,
		required: [true, "Price is required"],
	},
	description: {
		type: String,
		unique: false,
		required: [true, "Description is required"],
	},
	imageUrl: {
		type: String,
		unique: false,
		required: [true, "imageUrl is required"],
	},
	sellerId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	buyerId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	isSold: {
		type: Boolean,
		default: false,
	},
	sellerName: {
		type: String,
		unique: false,
	},
});

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
