const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const port = process.env.PORT || 8000;
const worksheetRoutes = require("./routes/worksheetRoutes");
const path = require("path");

// URI Configuration
dotenv.config();

// App Init
const app = express();
app.use(express.json());

// DB Connection
mongoose.connect(process.env.DB_URI);

app.use("/worksheets", express.static(path.join(__dirname, "worksheets")));

// Routes
app.use("/api", worksheetRoutes);

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

app.use("/worksheets", express.static(path.join(__dirname, "worksheets")));

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
app.post("/", upload.single("pdf"), (req, res, next) => {
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
