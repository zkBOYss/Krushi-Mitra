const express = require("express");

const router = express.Router();

const {
  register,
  login,
  validateToken,
  logout,
} = require("../controllers/authController");
const verifyToken = require("../middlewares/verifytoken");

router.get("/validate-token", verifyToken, validateToken);
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
