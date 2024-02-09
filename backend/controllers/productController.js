const Product = require("../models/productModel");
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

module.exports = {
	getAllProducts,
	getSingleProduct,
};
