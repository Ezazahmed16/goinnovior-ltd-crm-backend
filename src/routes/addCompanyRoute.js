// routes/api.js
const express = require('express');
const router = express.Router();
const companyController = require('../controllers/addCompanyController');

// Get all companies
router.get('/api/companies', companyController.getAllCompanies);

// Get a company by ID
router.get('/api/companies/:id', companyController.getCompanyById);

// Create a new company
router.post('/api/companies', companyController.createCompany);

// Update a company by ID
router.put('/api/companies/:id', companyController.updateCompanyById);

// Delete a company by ID
router.delete('/api/companies/:id', companyController.deleteCompanyById);

module.exports = router;
