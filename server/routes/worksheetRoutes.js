const express = require("express");
const router = express.Router();
const {
  getWorksheets,
  deleteWorksheet,
} = require("../controllers/worksheetsController");

// GET request to obtain all worksheets
router.get("/worksheets", getWorksheets);

// DELETE request to delete a worksheet
router.delete("/delete-worksheet/:id", deleteWorksheet());

module.exports = router;
