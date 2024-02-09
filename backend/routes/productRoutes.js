const express = require("express");

const verifyToken = require("../middlewares/verifyToken");
const { getAllProducts } = require("../controllers/productController");

router.get("/", getAllProducts);

module.exports = router;
