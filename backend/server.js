const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 4000;

connectDB();

const app = express();

// allow form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// allow reqs from localhost:3000
app.use(
  cors({
    allowedOrigins: "http://localhost:3000/",
  })
);

app.use("/api", require("./routes/messageRoutes"));

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}/`);
});
