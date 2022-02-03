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

// Update Route - Put (specific switch)
router.put("/:id", (req, res) => {
    const id = req.params.id;
    switches.findByIdAndUpdate(id, req.body)
    .then(data => { 
        if (!data) {
            res.status(404).send({ message: "Cannot update switch with id: " + id});
        } else {
            res.send({ message: "Switch was updated."})
        }
    })
    .catch(err => { res.status(500).send({ message: "Error updating switch with id: " + id }); })
});

// Delete Route - Delete
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    switches.findByIdAndDelete(id)
    .then(data => { 
        if (!data) {
            res.status(404).send({ message: "Cannot delete switch with id: " + id});
        } else {
            res.send({ message: "Switch was deleted."})
        }
    })
    .catch(err => { res.status(500).send({ message: "Error deleting switch with id: " + id }); })
});

module.exports = router;