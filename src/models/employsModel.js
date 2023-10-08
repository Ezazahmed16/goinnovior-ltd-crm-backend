const mongoose = require('mongoose');

const employSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    resumeLink: {
        type: String,
        required: true,
    },
    resumeAddDate: {
        type: Date,
        default: Date.now,
    },
    InterviewEvulationDate: {
        type: Date,
    },
    AppointmentDate: {
        type: Date,
    },
    LeaveDate: {
        type: Date,
    },
    currentStatus: {
        type: String,
    },
});

const Employ = mongoose.model('Employ', employSchema);

module.exports = Employ;
