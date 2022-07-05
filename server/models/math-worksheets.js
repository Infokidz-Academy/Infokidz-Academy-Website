const mongoose = require("mongoose");

const mathWorksheetSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  subject: {
    type: String,
  },
  grade: {
    type: String,
  },
  topic: {
    type: String,
  },
  pdf: {
    data: Buffer,
    contentType: String,
  },
});

const mathWorksheetModel = mongoose.model(
  "math-worksheets",
  mathWorksheetSchema
);
module.exports = mathWorksheetModel;
