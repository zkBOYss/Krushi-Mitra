const express = require("express");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
dotenv.config();

const register = async (req, res) => {
  const { username, email, password, firstName, lastName, mobileNumber } =
    req.body;

  try {
    const userExists = await User.findOne({ email, username });

    if (userExists) {
      return res.status(400).json({
        message: "User with this email/username already exists",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      username,
      firstName,
      lastName,
      email,
      password: hashedPassword,
      mobileNumber,
    });
    const savedUser = await user.save();

    const response = {
      message: "User created",
      user: {
        _id: savedUser._id,
        username: savedUser.username,
        firstName: savedUser.firstName,
        lastName: savedUser.lastName,
        email: savedUser.email,
      },
    };

    res.status(201).json({
      message: "User created",
      user: response,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(404).json({
      message: "Please enter valid email or password",
    });
  }

  try {
    const isUserExist = await User.findOne({ email });

    if (!isUserExist) {
      return res.status(404).json({
        message: "User not found, please check your email",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      isUserExist.password
    );

    if (isPasswordCorrect) {
      const token = jwt.sign(
        { email, username: isUserExist.username, id: isUserExist._id },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.status(200).json({
        message: "User logged in successfully!",
        token: token,
      });
    } else {
      res.status(400).json({
        message: "Please enter valid password!",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const logout = (req, res) => {
  res.send("Logout successful!");
};

module.exports = { register, login, logout };
