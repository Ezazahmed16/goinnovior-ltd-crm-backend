// newLeadRoute.js
const express = require('express');
const router = express.Router();
const newLeadController = require('../controllers/newLeadController');

// Create a new lead (POST request)
router.post('/leads', newLeadController.createLead);

// Get all leads (GET request)
router.get('/leads', newLeadController.getAllLeads);

// Delete lead by id (DELETE request)
router.delete('/leads/:id', newLeadController.deleteLeadById);

module.exports = router;
