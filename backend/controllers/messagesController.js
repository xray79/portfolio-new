const Message = require("../models/messagesModel");

// @desc    Get message
// @route   Get api/
// @access  Public
const getMessages = async (req, res) => {
  res.status(200).json({ message: "hello" });
};

// @desc    Post message
// @route   POST api/
// @access  Public
const postMessages = async (req, res) => {
  const message = await Message.create(req.body.data);
  res.status(201).json(message);
};

module.exports = { getMessages, postMessages };
