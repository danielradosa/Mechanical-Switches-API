const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let switchSchema = new Schema ({
    model: { type: String },
    brand: { type: String },
    manufacturer: { type: String },
    switchCollection: { type: String },
    switchType: { type: String },
    actuationForce: { type: String },
    preTravel: { type: String },
    totalTravel: { type: String },
    stemStructure: { type: String },
    mount: { type: String },
    lifespan: { type: String },
    colors: { type: String }
});

module.exports = mongoose.model("switch", switchSchema);