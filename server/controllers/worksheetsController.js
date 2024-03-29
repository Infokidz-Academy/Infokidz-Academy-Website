const worksheetModel = require("../models/worksheetModel");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const multer = require("multer");
const dotenv = require("dotenv");

// Environment variables Configuration
dotenv.config();

// Connection to aws s3 bucket
const s3 = new aws.S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: process.env.S3_BUCKET_REGION,
});

// GET all worksheets
const getWorksheets = async (req, res) => {
  const worksheets = await worksheetModel.find({});
  res.json(worksheets);
};

// DELETE worksheet
const deleteWorksheet = (req, res) => {
  // Obtain worksheet to delete
  worksheetModel.findById(req.params.id, (err, worksheet) => {
    if (err) {
      console.log("Error finding the current worksheet (DELETE): " + err);
    } else {
      const key = worksheet.name + ".pdf";

      // Delete worksheet from mongodb collection
      worksheetModel.deleteOne({ _id: req.params.id }).catch((err) => {
        console.log(
          "Error while deleting document from mongodb collection: " + err
        );
      });

      // s3 params
      let params = {
        Bucket: "worksheets-collection",
        Key: key,
      };

      // Delete corresponding object from aws s3 bucket
      s3.deleteObject(params, (err) => {
        if (err)
          console.log(
            "Error while deleting object from s3 bucket (DELETE): " + err
          );
      });
    }
  });
};

// Update worksheet
const updateWorksheet = (req, res) => {
  // Obtain worksheet to update
  worksheetModel.findById(req.params.id, (err, worksheet) => {
    if (err) {
      console.log("Error finding the current worksheet (PUT): " + err);
    } else {
      let draftTopic = req.body.draftTopic;
      let draftGrade = req.body.draftGrade;

      // Update fields with current values if empty
      if (draftTopic == "") {
        draftTopic = worksheet.topic;
      }

      if (draftGrade == "") {
        draftGrade = worksheet.grade;
      }

      // Update the document in the mongoDB collection without new pdfUrl
      worksheetModel.findByIdAndUpdate(
        { _id: req.params.id },
        {
          topic: draftTopic,
          grade: draftGrade,
        },
        (err) => {
          if (err) {
            console.log("Error updating the worksheet (PUT): " + err);
          }
        }
      );
    }
  });
};

// Uploading files to aws s3 bucket
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "worksheets-collection",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      // file name in s3 bucket
      cb(null, req.body.name + ".pdf");
    },
  }),
});

// Create worksheet
const createWorksheet = async (req, res) => {
  const uploadSingle = upload.single("file");

  // Upload file to aws s3 and save it to mongodb db
  uploadSingle(req, res, (err) => {
    if (err) {
      console.log("Error uploading file to s3 (POST): " + err);
    } else {
      const saveWorksheet = new worksheetModel({
        name: req.body.name,
        subject: req.body.subject,
        grade: req.body.grade,
        topic: req.body.topic,
        pdfUrl: req.file.location,
      });

      saveWorksheet
        .save()
        .catch((err) =>
          console.log("Error adding document to mongodb: " + err)
        );
    }
  });
};

module.exports = {
  getWorksheets,
  deleteWorksheet,
  updateWorksheet,
  createWorksheet,
};
