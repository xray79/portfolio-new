const express = require("express");
const router = express.Router();
const {
  getMessages,
  postMessages,
} = require("../controllers/messagesController");

router.route("/").get(getMessages).post(postMessages);

module.exports = router;
