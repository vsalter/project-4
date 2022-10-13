const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const practicePlanSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Time,
        required: true
    }
}, {
    timestamps: true,
});


module.exports = mongoose.model("Plan", practicePlanSchema);