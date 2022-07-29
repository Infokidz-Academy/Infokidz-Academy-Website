const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const worksheetRoutes = require("./routes/worksheetRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");

// URI Configuration
dotenv.config();

// App Init
const app = express();

// DB Connection
mongoose.connect(process.env.DB_URI);

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api", worksheetRoutes);

// Port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;
