const express = require("express");
const {
  getAuthentication,
  getCallback,
  getSuccess,
  getFailure,
  getLogout,
  getEmail,
} = require("../controllers/authController");
const cors = require("cors");
const bodyParser = require("body-parser");

// Router
const router = express.Router();

// Middleware
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// GET request to provide login
router.get("/google", getAuthentication);

// Google callback route
router.get("/google/callback", getCallback);

// Google login success route
router.get("/protected", getSuccess);

// Google login failure route
router.get("/failure", getFailure);

// Google logout route
router.get("/logout", getLogout);

// GET require to provide login email
router.get("/email", getEmail);

module.exports = router;
