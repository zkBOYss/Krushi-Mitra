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
