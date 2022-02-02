const router = require("express").Router();
const switches = require("../models/switch");

// Create Route - Post
router.post("/", (req, res) => {
    data = req.body;
    switches.insertMany(data)
    .then(data => { res.send(data); })
    .catch(err => { res.status(500).send({ message: err.message }); })
});

// Read Route - All || specific switch - Get
router.get("/", (req, res) => {
    data = req.body;
    switches.find(data)
    .then(data => { res.send(data); })
    .catch(err => { res.status(500).send({ message: err.message }); })
});

// Update Route - Put

// Delete Route - Delete

module.exports = router;