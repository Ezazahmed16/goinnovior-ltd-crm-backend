const mongoose = require('mongoose');

const Position = new mongoose.Schema({
    positionName: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Position', Position);
