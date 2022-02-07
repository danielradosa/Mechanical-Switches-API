const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let switchSchema = new Schema ({
    model: { type: String, required: true },
    brand: { type: String, required: true },
    switchCollection: { type: String, required: true },
    switchType: { type: String, required: true },
    actuationForce: { type: String, required: true },
    preTravel: { type: String, required: true },
    totalTravel: { type: String, required: true },
    stemStructure: { type: String, required: true },
    mount: { type: String, required: true },
    lifespan: { type: String, required: true },
    colors: { type: String, required: true },
    manufacturer: { type: String, required: true }
});

module.exports = mongoose.model("switch", switchSchema);
