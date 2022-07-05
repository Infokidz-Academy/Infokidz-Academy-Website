const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const port = process.env.PORT || 8000;

// URI Configuration
dotenv.config();

// App Init
const app = express();
app.use(express.json());

// DB Connection
mongoose.connect(process.env.DB_URI);

// Port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;
