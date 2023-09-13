const mongoose = require('mongoose');

const companyTypeModel = new mongoose.Schema({
    name: {
    type: String,
    required: true,
  },
  // Add more fields as needed
});

module.exports = mongoose.model('CompanyType', companyTypeModel);
