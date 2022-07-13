const worksheetModel = require("../models/worksheetModel");

// GET all worksheets
const getWorksheets = async (req, res) => {
  const worksheets = await worksheetModel.find({});
  res.json(worksheets);
};

module.exports = {
  getWorksheets,
};
