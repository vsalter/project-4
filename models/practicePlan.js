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
        default: function(){
            return new Date(new Date().setFullYear(new Date().getFullYear()))
        }
    },
    endTime: {
        type: Date, 
        default: function(){
            return new Date(new Date(YYYY-mm-dd))
        }
    },
    // complete: {
    //     type: Boolean,
    //     default: false,
    // },
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true }
}, {
    timestamps: true, 
});


module.exports = mongoose.model("Plan", practicePlanSchema);