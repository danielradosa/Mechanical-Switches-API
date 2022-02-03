const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

require("dotenv-flow").config();
// DEFINITIONS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Start Server
const PORT = process.env.PORT || 4000;

app.listen(PORT, function() {
    console.log("Server running on port: " + PORT);
})

// CONNECT TO MONGOdb
mongoose.connect (
    process.env.DBHOST,  { 
        useUnifiedTopology: true, 
        useNewUrlParser: true 
    }
  ).catch(error => console.log("Error connecting to MongoDB: " + error));
mongoose.connection.once('open', () => console.log('Connected succesfully to MongoDB'));

// IMPORT ROUTES
const switchRoute = require('./routes/switch');
const authRoute = require('./routes/auth');

// ROUTES
app.get("/api/welcome", (req, res) => {
    res.status(200).send({message: "Welcome to the MS-API"});
})

// CRUD
app.use("/api/switches", switchRoute);
app.use("/api/user", authRoute);

module.exports = app;