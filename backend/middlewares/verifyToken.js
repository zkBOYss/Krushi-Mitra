const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();

const verifyToken = (req, res, next) => {
  const { jwt_token } = req.cookies;
  console.log(jwt_token);
  if (!jwt_token) {
    return res.status(401).json({
      message: "Unauthorized!",
    });
  }

  try {
    const decoded = jwt.verify(jwt_token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log(req.user);
    next();
  } catch (error) {
    res.status(400).json({
      message: "Invalid token",
    });
  }
};

module.exports = verifyToken;
