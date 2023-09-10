const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create a new user (POST request)
router.post('/users', userController.createUser);

// Get all users (GET request)
router.get('/users', userController.getAllUsers);

// Delete user by id (DELETE request with parameter :id)
router.delete('/users/:id', userController.deleteUserById);

module.exports = router;
