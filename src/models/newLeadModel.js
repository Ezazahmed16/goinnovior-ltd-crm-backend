const mongoose = require('mongoose');

const newLeadSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: String,
    fullName: String,
    email: {
        type: String,
        required: true,
    },
    phoneNumbers: {
        type: String,
        required: true,
    },
    whatsappNumber: String,
    companyName: String,
    position: String,
    department: String,
    leadEntryDate: {
        type: Date,
        default: Date.now,
    },
});

const NewLead = mongoose.model('NewLead', newLeadSchema);

module.exports = NewLead;
