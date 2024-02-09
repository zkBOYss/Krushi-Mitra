const Product = require("../models/productModel");
const cloudinary = require("cloudinary");

const getAllProducts = async (req, res) => {
	try {
		const products = await Product.find({});
		if (products.length === 0) {
			return res.status(404).json({
				message: "No product found!",
			});
		}

		res.json(products);
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
};

const createProduct = async (req, res) => {
	try {
		const productDetails = req.body;
		const imageFiles = req.files;

		const uploadPromises = imageFiles.map(async (image) => {
			const b64 = Buffer.from(image.buffer).toString("base64");

			const dataURI = "data:" + image.mimetype + ";base64," + b64;
			const result = await cloudinary.uploader.upload(dataURI);
			return result.url;
		});

		const imageUrls = await Promise.all(uploadPromises);

		productDetails.imageUrl = imageUrls;

		const product = new Product(productDetails);
		const newProduct = await product.save();

		res.status(201).json(newProduct);
	} catch (error) {
		res.status(400).json({
			message: error.message,
		});
	}
};
const getSingleProduct = async (req, res) => {
	const { productId } = req.params;

	try {
		const product = await Product.findById(productId);

		if (!product) {
			return res.status(404).json({
				message: "Product not found!",
			});
		}

		res.json(product);
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
};

const updateProduct = async (req, res) => {
	const { productId } = req.params;
	const { name, description, price, quantity, imageUrl } = req.body;

	try {
		const product = await Product.findByIdAndUpdate(
			productId,
			{
				name,
				description,
				price,
				quantity,
				imageUrl,
				sellerId: req.user.id,
				buyerId: req.user.id,
				isSold: true,
			},
			{
				new: true,
			}
		);

		if (!product) {
			return res.status(404).json({
				message: "Product not found!",
			});
		}

		res.json(product);
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
};

const deleteProduct = async (req, res) => {
	const { productId } = req.params;

	try {
		const product = await Product.findByIdAndDelete(productId);

		if (!product) {
			return res.status(404).json({
				message: "Product not found!",
			});
		}

		res.json({
			message: "Product deleted!",
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
};

module.exports = {
	getAllProducts,
	getSingleProduct,
	updateProduct,
	createProduct,
	deleteProduct,
};
