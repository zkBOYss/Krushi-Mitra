const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const {
	getAllProducts,
	getSingleProduct,
	updateProduct,
	deleteProduct,
	createProduct,
} = require("../controllers/productController");

const multer = require("multer");
const storage = multer.memoryStorage();

const upload = multer({
	storage: storage,
	limits: {
		fileSize: 5 * 1024 * 1024,
	},
});

router.get("/", getAllProducts);
router.post("/", verifyToken, upload.array("imageFiles", 6), createProduct);
router.get("/:productId", getSingleProduct);
router.get("/:productId", verifyToken, updateProduct);
router.delete("/:productId", verifyToken, deleteProduct);

module.exports = router;
