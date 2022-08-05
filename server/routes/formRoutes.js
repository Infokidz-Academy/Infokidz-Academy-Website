const express = require("express");
const { getFormInfo } = require("../controllers/formController");
const cors = require("cors");
const bodyParser = require("body-parser");

// Router
const router = express.Router();

// Middleware
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// GET EmailJS form information
router.get("/forminfo", getFormInfo);

module.exports = router;
