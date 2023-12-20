// DEPENDENCIES
const express = require("express");

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

// START APP
app.listen(PORT, () => console.log(`Server live on port ${PORT}.`));
