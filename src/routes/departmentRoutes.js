// routes/departmentRoutes.js
const express = require('express');
const departmentController = require('../controllers/departmentController');

const router = express.Router();

// Get all departments
router.get('/api/departments', departmentController.getAllDepartments);

// Create a new department
router.post('/api/departments', departmentController.createDepartment);

// Delete a department by ID
router.delete('/api/departments/:id', departmentController.deleteDepartment);

// Update a department by ID
router.put('/api/departments/:id', departmentController.updateDepartment);

module.exports = router;
