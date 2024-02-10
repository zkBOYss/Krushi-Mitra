const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
	venue: {
		type: String,
		required: [true, "venue is required"],
	},
	date: {
		type: Date,
		required: [true, "Date is required"],
	},
	name: {
		type: String,
		required: [true, "Name is required"],
	},
	time: {
		type: String,
		required: [true, "Date is required"],
	},
	description: {
		type: String,
		required: [true, "Description is required"],
	},
	imageUrl: {
		type: String,
		required: [true, "Image url is required"],
	},
	organizer: {
		type: String,
		required: [true, "Organizer is required"],
	},
});

const Event = mongoose.model("event", EventSchema);

module.exports = Event;
