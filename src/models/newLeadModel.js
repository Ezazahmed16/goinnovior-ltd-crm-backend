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
        primary: {
            type: String,
            required: true,
        },
        additional: String,
    },
    whatsappNumber: String,
    companyName: String,
    companyType: String,
    position: String,
    department: String,
    leadEntryDate: {
        type: Date,
        default: Date.now,
    },
    leadAddBy: String,
    status: String,
    message: String,
    callingDate: Date,
    callBy: String,
});

const NewLead = mongoose.model('NewLead', newLeadSchema);

module.exports = NewLead;
