const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		unique: true,
		required: [true, "Name is required"],
	},
	firstName: {
		type: String,
		unique: false,
		required: ["First name is required"],
	},
	lastName: {
		type: String,
		unique: false,
		required: ["last name is required"],
	},
	email: {
		type: String,
		unique: true,
		required: [true, "Email is required"],
	},
	password: {
		type: String,
		unique: false,
		required: ["Password is required"],
	},
	mobileNumber: {
		type: Number,
		unique: true,
		required: [true, "number is required"],
	},
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
