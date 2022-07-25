const express = require("express");
const {
  getWorksheets,
  deleteWorksheet,
  //updateWorksheet,
  createWorksheet,
} = require("../controllers/worksheetsController");
const cors = require("cors");
const bodyParser = require("body-parser");

// Router
const router = express.Router();

// Middleware
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// GET request to obtain all worksheets
router.get("/worksheets", getWorksheets);

// DELETE request to delete a worksheet
router.delete("/delete-worksheet/:id", deleteWorksheet);

// PUT request to update a worksheet
//router.put("/update-worksheet/:id", updateWorksheet);

// POST request to create a worksheet
router.post("/create-worksheet", createWorksheet);

module.exports = router;
