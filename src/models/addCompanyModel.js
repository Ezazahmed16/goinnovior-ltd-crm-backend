// models/company.js
const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  companyType: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  whatsappNumber: {
    type: String,
    required: true,
  },
  linkedinUrl: String,
  companyWebsite: String,
  companyAddress: {
    companyCountry: String,
    companyCity: String,
    companyArea: String,
  },
});

module.exports = mongoose.model('Company', companySchema);
