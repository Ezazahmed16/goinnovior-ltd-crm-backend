const express = require('express');
const router = express.Router();
const employController = require('../controllers/employsControllers');

// Create a new Employ record (POST request)
router.post('/api/employs', employController.createEmploy);

// Get all Employ records (GET request)
router.get('/api/employs', employController.getAllEmploy);

// Get all Employ records By Status (GET request)
router.get('/api/employs/status/:status', employController.getDataByStatus);

// Update Employ record by ID (PUT request)
router.put('/api/employs/:id', employController.updateEmploy);

// Delete Employ record by ID (DELETE request)
router.delete('/api/employs/:id', employController.deleteEmploy);

module.exports = router;
