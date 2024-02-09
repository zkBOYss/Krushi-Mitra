const express = require("express");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
dotenv.config();

const register = async (req, res) => {
	const { username, email, password, firstName, lastName } = req.body;

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
	const { email, password } = req.body; // get email and password from the request body
	if (!email || !password) {
		// check if email or password is not provided by the user
		return res.status(404).json({
			message: "Please enter valid email or password",
		});
	}

	try {
		const isUserExist = await User.findOne({ email }); // check if the user exists in the database

		if (!isUserExist) {
			// if the user does not exists in the database then return a message
			return res.status(404).json({
				message: "User not found, please check your email",
			});
		}

		const isPasswordCorrect = await bcrypt.compare(
			// compare the password provided by the user with the password stored in the database
			password,
			isUserExist.password
		);

		if (isPasswordCorrect) {
			// if the password is correct then only generate the token
			const token = jwt.sign(
				{ email, username: isUserExist.username, id: isUserExist._id },
				process.env.JWT_SECRET,
				{ expiresIn: "24h" }
			);
			// Set the token as a cookie
			res.cookie("jwt_token", token, { sameSite: "none", secure: true }); // set the token as a cookie for further use

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
		// if any error occurs then return the error message
		res.status(500).json({
			message: error.message,
		});
	}
};

const validateToken = (req, res) => {
	res.status(200).send({
		userId: req.user.id,
	});
};

const logout = (req, res) => {
	res.clearCookie("jwt_token");

	res.send("Logout successful!");
};

module.exports = login;

module.exports = { register, login, validateToken, logout };
