const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController');

// Create a new invoice
router.post('/api/invoices', invoiceController.createInvoice);

// Retrieve all invoices
router.get('/api/invoices', invoiceController.getAllInvoices);

// Retrieve a single invoice by ID
router.get('/api/invoices/:id', invoiceController.getInvoiceById);

// Update an existing invoice by ID
router.put('/api/invoices/:id', invoiceController.updateInvoice);

// Delete an invoice by ID
router.delete('/api/invoices/:id', invoiceController.deleteInvoice);

module.exports = router;
