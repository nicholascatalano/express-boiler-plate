// DEPENDENCIES
const express = require("express");

// DATA

// APP/PORT
const app = express();
const PORT = process.env.PORT || 3001;

// MIDDLEWARES

// ROUTES

// START APP
app.listen(PORT, () => console.log(`Server live on port ${PORT}.`));
