const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

require("dotenv-flow").config();
// DEFINITIONS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// IMPORT ROUTES
const switchRoute = require('./routes/switch');
const authRoute = require('./routes/auth');

// CONNECT TO MONGOdb
mongoose.connect (
    process.env.DBHOST,  { useUnifiedTopology: true, useNewUrlParser: true }
  ).catch(error => console.log("Error connecting to MongoDB: " + error));
  
  mongoose.connection.once('open', () => console.log('Connected succesfully to MongoDB'));

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