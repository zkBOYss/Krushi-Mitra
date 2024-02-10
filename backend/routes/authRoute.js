const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");

const {
	register,
	login,
	validateToken,
	logout,
} = require("../controllers/authController");

router.get("/validate-token", verifyToken, validateToken);
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
