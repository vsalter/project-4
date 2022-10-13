const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const practicePlanSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true }
}, {
    timestamps: true, 
});


module.exports = mongoose.model("Plan", practicePlanSchema);