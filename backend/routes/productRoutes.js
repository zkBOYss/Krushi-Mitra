const express = require("express");

const verifyToken = require("../middlewares/verifyToken");

router.get("/", getAllProducts);

module.exports = router;
