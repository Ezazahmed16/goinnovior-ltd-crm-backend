const express = require('express');
const router = express.Router();
const companyTypeController = require('../controllers/companyTypeController');

// Create a new company type
router.post('/api/companyType', companyTypeController.createCompanyType);

// Get all company types
router.get('/api/companyType/', companyTypeController.getAllCompanyTypes);

// Get a company type by ID
router.get('/api/companyType/:id', companyTypeController.getCompanyTypeById);

// Update a company type by ID
router.put('/api/companyType/:id', companyTypeController.updateCompanyType);

// Delete a company type by ID
router.delete('/api/companyType/:id', companyTypeController.deleteCompanyType);

module.exports = router;
