const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

require("dotenv-flow").config();


// ROUTES
app.get("/api/welcome", (req, res) => {
    res.status(200).send({message: "Welcome to the MS-API"});
})

// CRUD


const PORT = process.env.PORT || 4000;

app.listen(PORT, function() {
    console.log("Server running on port: " + PORT);
})

module.exports = app;