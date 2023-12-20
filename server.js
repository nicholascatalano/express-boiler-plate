// DEPENDENCIES
const express = require("express");
const path = require("path");

// DATA

// APP/PORT
const app = express();
const PORT = process.env.PORT || 3001;

// MIDDLEWARES
// stuff to get the req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// static assets
app.use(express.static("public"));

// ROUTES
// html routes - deliver pages
// GET / - the home page
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

// api routes - deliver data

// START APP
app.listen(PORT, () => console.log(`Server live on port ${PORT}.`));
