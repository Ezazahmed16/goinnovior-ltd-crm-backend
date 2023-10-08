const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  invoiceNumber: String,
  date: Date,
  companyName: String,
  paymentTerm: String,
  poReference: String,
  dueWithin: Date,
  billingPeriod: {
    startDate: Date,
    endDate: Date,
  },
  items: [
    {
      itemName: String,
      description: String,
      quantity: Number,
      unitPrice: Number,
    },
  ],
  termsAndConditions: [String],
});

module.exports = mongoose.model('Invoice', invoiceSchema);
