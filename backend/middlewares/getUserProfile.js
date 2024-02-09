const User = require("../models/userModel");

const getUserProfile = async (req, res, next) => {
  try {
    const userId = req.user.id; // this was passed by verifyToken middleware it an req object

    const user = await User.findById(userId); // find the user by id from the database

    if (!user) {
      return res.status(400).json({
        message: "user not found",
      });
    }
    req.profile = user; // attacthing user req object for later use
    next();
  } catch (error) {
    res.status(500).json({
      message: error.message || "something went wrong",
    });
  }
};

module.exports = getUserProfile;
