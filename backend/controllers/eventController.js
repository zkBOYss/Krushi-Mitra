const Event = require("../models/eventModel");
const cloudinary = require("cloudinary");
const User = require("../models/userModel");

const addEvent = async (req, res) => {
	try {
		const eventDetails = req.body;

		const imageFile = req.file;

		// upload to cloudinary
		const b64 = Buffer.from(imageFile.buffer).toString("base64");
		const dataURI = "data:" + imageFile.mimetype + ";base64," + b64;
		const result = await cloudinary.uploader.upload(dataURI);

		const imageUrl = result.url;

		eventDetails.imageUrl = imageUrl;

		const newEvent = new Event(eventDetails);

		const event = await newEvent.save();
		sendSmsToUsers(event);
		res.status(201).json({
			message: "Event created successfully!",
			event,
		});
	} catch (err) {
		res.status(400).json({
			message: err.message,
		});
	}
};

const getAllEvents = async (req, res) => {
	try {
		const events = await Event.find({});

		if (events.length === 0) {
			return res.status(404).json({
				message: "No event found!",
			});
		}

		res.json(events);
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
};

const getEventById = async (req, res) => {
	const { eventId } = req.params;
	try {
		const event = await Event.findById(eventId);
		if (!event) {
			return res.status(404).json({
				message: "Event not found!",
			});
		}

		res.json(event);
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
};

const updateEvent = async (req, res) => {
	const { eventId } = req.params;
	const { name, venue, date, time, description, imageUrl, organizer } =
		req.body;

	try {
		const event = await Event.findByIdAndUpdate(
			eventId,
			{
				name,
				venue,
				date,
				time,
				description,
				imageUrl,
				organizer,
			},
			{ new: true }
		);
		if (!event) {
			return res.status(404).json({
				message: "Event not found!",
			});
		}
		res.json(event);
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
};

const sendSmsToUsers = async (event) => {
	try {
		const users = await User.find({
			mobileNumber: { $exists: true, $ne: null },
		});

		for (const user of users) {
			const phoneNumber = user.mobileNumber;
			const eventName = event.name;
			const eventLocation = event.location;
			const eventTime = event.time;

			const message = `Event Reminder: ${eventName}\n happening at Location: ${eventLocation}\n at Time: ${eventTime}`;

			await vonage.message.sendSms("12014646436", phoneNumber, message);
		}
	} catch (err) {
		console.error(err);
	}
};

module.exports = {
	addEvent,
	getAllEvents,
	getEventById,
	updateEvent,
};
