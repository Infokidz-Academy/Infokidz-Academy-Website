const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const port = process.env.PORT || 8000;
const worksheetRoutes = require("./routes/worksheetRoutes");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const worksheetModel = require("./models/worksheetModel");
const fs = require("fs");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");

// URI Configuration
dotenv.config();

// App Init
const app = express();
app.use(express.json());

// DB Connection
mongoose.connect(process.env.DB_URI);

app.use("/worksheets", express.static(path.join(__dirname, "worksheets")));
//app.use("/worksheets", express.static("worksheets"));
//app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api", worksheetRoutes);

// Storing files

const s3 = new aws.S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: process.env.S3_BUCKET_REGION,
});

/*
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./worksheets/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
*/

/*app.post("/create-worksheet", upload.single("pdf"), (req, res) => {
  const saveWorksheet = new worksheetModel({
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
});*/

/*
app.post("/api/create-worksheet", upload.single("pdf"), (req, res) => {
  const saveWorksheet = new worksheetModel({
    name: req.body.name,
    subject: req.body.subject,
    grade: req.body.grade,
    topic: req.body.topic,
    pdf: {
      data: fs.readFileSync(
        path.join(__dirname + "/worksheets/" + req.body.name + ".pdf")
      ),
      contentType: "application/pdf",
    },
  });

  saveWorksheet
    .save()
    .then((res) => console.log("pdf saved"))
    .catch((err) => console.log("there's an errorr" + err));
});*/

/*
app.post("/api/create-worksheet", upload.single("pdf"), (req, res, next) => {
  var object = {
    name: req.body.name,
    subject: req.body.subject,
    grade: req.body.grade,
    topic: req.body.topic,
    pdf: {
      data: fs.readFileSync(
        path.join(__dirname + "/worksheets/" + req.file.filename)
      ),
      contentType: "application/pdf",
    },
  };
  worksheetModel.create(object, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
});*/

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "worksheets-collection",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      // name of the file
      cb(null, req.body.name + ".pdf");
    },
  }),
});

app.post("/api/create-worksheet", (req, res, next) => {
  const uploadSingle = upload.single("file");

  uploadSingle(req, res, (err) => {
    if (err) {
      //return res.status(400).json({ success: false, message: err.message });
      console.log("error uploading file to s3: " + err);
    } else {
      //console.log(req.body.file);
      console.log(req.file);

      const saveWorksheet = new worksheetModel({
        name: req.body.name,
        subject: req.body.subject,
        grade: req.body.grade,
        topic: req.body.topic,
        pdfUrl: req.file.location,
      });

      saveWorksheet
        .save()
        .then((res) => console.log("mongodb document saved"))
        .catch((err) =>
          console.log("there's an errorr saving document to mongo" + err)
        );
    }
  });
});

// Port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;

/* Use for later */
/*
// EJS
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "ejs");

// Storing files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "worksheets");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// GET request
app.get("/", (req, res) => {
  mathWorksheetModel.find({}, (err, items) => {
    if (err) {
      res.send(err);
    } else {
      res.render("pdfsPage", { items: items });
    }
  });
});

// POST Request
app.post("/", supload.single("pdf"), (req, res, next) => {
  var object = {
    name: req.body.name,
    subject: req.body.subject,
    grade: req.body.grade,
    topic: req.body.topic,
    pdf: {
      data: fs.readFileSync(
        path.join(__dirname + "/worksheets/" + req.file.filename)
      ),
      contentType: "application/pdf",
    },
  };
  mathWorksheetModel.create(object, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
});
*/
