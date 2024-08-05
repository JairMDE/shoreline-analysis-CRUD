const mongoose = require('mongoose');

const ShorelineDataSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    erosionRate: {
        type: Number,
        required: true,
    },
    accretionRate: {
        type: Number,
        required: true,
    },
    dataSource: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('ShorelineData', ShorelineDataSchema);
