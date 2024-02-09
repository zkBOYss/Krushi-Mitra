const express = require("express");
const {
  addEvent,
  getAllEvents,
  getEventById,
  updateEvent,
} = require("../controllers/eventController");
const router = express.Router();
const verifyToken = require("../middlewares/verifytoken");
const multer = require("multer");

// upload image
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

router.get("/", getAllEvents);
router.post("/", verifyToken, upload.single("imageFile"), addEvent);
router.get("/:eventId", getEventById);
router.put("/:eventId", updateEvent);

// TODOS
// router.delete("/:eventId", deleteEvent)

module.exports = router;
