const express = require("express");
const verifyToken = require("../middlewares/verifytoken");
const getUserProfile = require("../middlewares/getUserProfile");
const { getUser } = require("../controllers/userController");
const router = express.Router();

router.get("/profile", verifyToken, getUserProfile, getUser);
