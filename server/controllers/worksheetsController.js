const worksheetModel = require("../models/worksheetModel");

// GET all worksheets
const getWorksheets = async (req, res) => {
  const worksheets = await worksheetModel.find({});
  res.json(worksheets);
};

const deleteWorksheet = async (req, res) => {
  await worksheetModel.deleteOne(req.params.id);
};

module.exports = {
  getWorksheets,
  deleteWorksheet,
};
