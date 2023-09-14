// newLeadRoute.js
const express = require('express');
const router = express.Router();
const newLeadController = require('../controllers/newLeadController');

// Create a new lead (POST request)
router.post('/api/leads', newLeadController.createLead);

// Get all leads (GET request)
router.get('/api/leads', newLeadController.getAllLeads);

// Delete lead by id (DELETE request)
router.delete('/api/leads/:id', newLeadController.deleteLeadById);

module.exports = router;
