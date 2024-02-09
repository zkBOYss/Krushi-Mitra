const express = require("express");

const router = express.Router();

const { register, login, logout } = require("../controllers/authController");
const verifyToken = require("../middlewares/verifytoken");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
