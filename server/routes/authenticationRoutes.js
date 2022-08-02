const express = require("express");
const { getAuthentication } = require("../controllers/authController");
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

module.exports = router;
