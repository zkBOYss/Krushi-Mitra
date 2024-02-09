const { Event } = require("../models/eventModel");
const cloudinary = require("cloudinary");

const addEvent = async (req, res) => {
  try {
    const eventDetails = req.body;
    const file = req.file;

    const b64 = Buffer.from(image.buffer).toString("base64");
    const dataURI = "data:" + image.File.mimetype + ";base64," + b64;
    const result = await cloudinary.uploader.upload(dataURI);

    const imageUrl = result.url;

    eventDetails.imageUrl = imageUrl;
    const newEvent = new Event(eventDetails);
    res.status(201).json({
      message: "event created successfully",
      newEvent,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addEvent,
};
