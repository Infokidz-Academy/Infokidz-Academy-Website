const express = require("express");
const router = express.Router();
const { getWorksheets } = require("../controllers/worksheetsController");

// GET request to obtain all worksheets
router.get("/worksheets", getWorksheets);

module.exports = router;
