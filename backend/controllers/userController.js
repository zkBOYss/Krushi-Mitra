const getUser = async (req, res) => {
  res.status(200).json({
    user: req.profile,
  });
};

module.exports = { getUser };
