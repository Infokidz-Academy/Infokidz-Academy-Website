const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const worksheetRoutes = require("./routes/worksheetRoutes");
const authenticationRoutes = require("./routes/authenticationRoutes");
const formRoutes = require("./routes/formRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");
require("./auth");
const passport = require("passport");
const session = require("express-session");

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
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api", worksheetRoutes);
app.use("/auth", authenticationRoutes);
app.use("/form", formRoutes);

// Port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;
