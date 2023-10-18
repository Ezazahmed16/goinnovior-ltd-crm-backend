const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  invoiceNumber: String,
  date: Date,
  companyName: String,
  paymentTerm: String,
  poReference: String,
  dueWithin: Date,
  vat: String,
  status: String,
  discount: Number,
  billingPeriod: {
    startDate: Date,
    endDate: Date,
  },
  items: [
    {
      slNo: Number,
      itemName: String,
      description: String,
      quantity: Number,
      unitPrice: Number,
      brand: String,
      model: String,
      specification: String,
      warranty: String,
      origin: String,
    },
  ],
  termsAndConditions: [String],
});

module.exports = mongoose.model('Invoice', invoiceSchema);
