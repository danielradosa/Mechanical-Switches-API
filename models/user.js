const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let userSchema = new Schema (
    {
        userName: {type: String, required: true, min: 6, max:255},
        email: {type: String, required: true, min: 6, max:255},
        password: {type: String, required: true, min: 5, max:255},
        dateCreated: {type: Date, default: Date.now}
    }
);

module.exports = mongoose.model("user", userSchema);