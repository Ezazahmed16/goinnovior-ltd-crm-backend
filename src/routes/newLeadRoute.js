const express = require('express');
const router = express.Router();
const newLeadController = require('../controllers/newLeadController');

// Create a new lead (POST request)
router.post('/api/leads', newLeadController.createLead);

// Get all leads (GET request)
router.get('/api/leads', newLeadController.getAllLeads);

// Get lead by id (GET request)
router.get('/api/leads/:id', newLeadController.getLeadById);

// Update lead by id (PUT request)
router.put('/api/leads/:id', newLeadController.updateLeadById);

// Delete lead by id (DELETE request)
router.delete('/api/leads/:id', newLeadController.deleteLeadById);

module.exports = router;
