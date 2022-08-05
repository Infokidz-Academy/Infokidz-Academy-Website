const express = require("express");
const {
  getFormInfo,
  getEmailJSRegistration,
  getEmailJSContact,
  getSheetbestRegistration,
} = require("../controllers/formController");
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

// GET EmailJS registration template ID
router.get("/emailjs/registration", getEmailJSRegistration);

// GET EmailJS contact template ID
router.get("/emailjs/contact", getEmailJSContact);

// GET sheetbest registration link
router.get("/sheetbest/registration", getSheetbestRegistration);

module.exports = router;
