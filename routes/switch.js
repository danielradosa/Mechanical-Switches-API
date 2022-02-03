const router = require("express").Router();
const switches = require("../models/switch");

// Create Route - Post Switch
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

router.get("/:id", (req, res) => {
    switches.findById(req.params.id)
    .then(data => { res.send(data); })
    .catch(err => { res.status(500).send({ message: err.message }); })
});

// Read Route - by Type
router.get("/type/linear", (req, res) => {
    switches.find({ switchType: "Linear" })
    .then(data => { res.send(data); })
    .catch(err => { res.status(500).send({ message: err.message }); })
});

router.get("/type/tactile", (req, res) => {
    switches.find({ switchType: "Tactile" })
    .then(data => { res.send(data); })
    .catch(err => { res.status(500).send({ message: err.message }); })
});

router.get("/type/clicky", (req, res) => {
    switches.find({ switchType: "Clicky" })
    .then(data => { res.send(data); })
    .catch(err => { res.status(500).send({ message: err.message }); })
});

// Read Route - by Mount
router.get("/mount/5pin", (req, res) => {
    switches.find({ mount: "5-pin" })
    .then(data => { res.send(data); })
    .catch(err => { res.status(500).send({ message: err.message }); })
});

router.get("/mount/3pin", (req, res) => {
    switches.find({ mount: "3-pin" })
    .then(data => { res.send(data); })
    .catch(err => { res.status(500).send({ message: err.message }); })
});

// Update Route - Put


// Delete Route - Delete

module.exports = router;