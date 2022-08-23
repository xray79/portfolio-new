import mongoose from "mongoose";
// import dotenv from "dotenv";
import Message from "../../model/messageModel";

// add env files
// dotenv.config();

// connect to DB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
connectDB();

// @desc    Post message
// @route   POST api/
// @access  Public
const postMessages = async (req, res) => {
  const message = await Message.create(req.body.data);
  res.status(201).json(message);
};

export default postMessages;
