const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let switchSchema = new Schema ({
    name: { type: String },
    manufacturer: { type: String },
    topHousing: { type: String },
    botHousing: { type: String },
    stemColor: { type: String },
    topHousingColor: { type: String },
    botHousingColor: { type: String },
    type: { type: String },
    material: { type: String }
});

module.exports = mongoose.model("switch", switchSchema);