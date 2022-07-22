const mongoose = require("mongoose");

const worksheetSchema = new mongoose.Schema({
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
  /*pdf: {
    data: Buffer,
    contentType: String,
  },*/
  pdf: {
    type: String,
  },
});

const worksheetModel = mongoose.model("math-worksheets", worksheetSchema);
module.exports = worksheetModel;
