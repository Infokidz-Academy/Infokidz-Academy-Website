const worksheetModel = require("../models/worksheetModel");
const fs = require("fs");
const path = require("path");

// GET all worksheets
const getWorksheets = async (req, res) => {
  const worksheets = await worksheetModel.find({});
  res.json(worksheets);
};

// DELETE worksheet
const deleteWorksheet = async (req, res) => {
  await worksheetModel.deleteOne({ _id: req.params.id });

  // delete corresponding pdf too
};

// Update worksheet
/*
const updateWorksheet = async (req, res) => {
  await worksheetModel.updateOne(
    { _id: new ObjectId(req.params.id) },
    {
      $set: {
        name: req.body.draftTitle,
        topic: req.body.draftTopic,
        description: req.body.draftDescription,
      },
    }
  );
};*/

// Create worksheet
/*const createWorksheet = async (req, res) => {
  var object = {
    name: req.body.name,
    subject: req.body.subject,
    grade: req.body.grade,
    topic: req.body.topic,
    pdf: {
      data: fs.readFileSync(
        path.join(__dirname + "/../worksheets/" + req.body.name + ".pdf")
      ),
      contentType: "application/pdf",
    },
  };
  worksheetModel.create(object, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/practice-worksheets/admin");
    }
  });
}; */

const createWorksheet = async (req, res) => {
  const saveWorksheet = await new worksheetModel({
    name: req.body.name,
    subject: req.body.subject,
    grade: req.body.grade,
    topic: req.body.topic,
    pdf: {
      data: fs.readFileSync("worksheets/" + req.file.filename),
      contentType: "application/pdf",
    },
  });

  saveWorksheet
    .save()
    .then((res) => console.log("image saved"))
    .catch((err) => console.log("there's an errorr" + err));
};

module.exports = {
  getWorksheets,
  deleteWorksheet,
  //updateWorksheet,
  createWorksheet,
};
