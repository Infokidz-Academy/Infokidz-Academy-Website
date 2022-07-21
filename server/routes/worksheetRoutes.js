const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();
const {
  getWorksheets,
  deleteWorksheet,
  //updateWorksheet,
  createWorksheet,
} = require("../controllers/worksheetsController");

// Storing files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "worksheets");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname + ".pdf");
  },
});

const upload = multer({ storage: storage });

// GET request to obtain all worksheets
router.get("/worksheets", getWorksheets);

// DELETE request to delete a worksheet
router.delete("/delete-worksheet/:id", deleteWorksheet);

// PUT request to update a worksheet
//router.put("/update-worksheet/:id", updateWorksheet);

// POST request to create a worksheet
//router.post("/create-worksheet", upload.single("pdf"), createWorksheet);

module.exports = router;
