const express = require("express");
const port = process.env.PORT || 8000;

// App Init
const app = express();
app.use(express.json());

// Port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;
