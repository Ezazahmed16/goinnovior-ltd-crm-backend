const express = require('express');
const router = express.Router();
const positionController = require('../controllers/addPositionController');

// Define the route for creating a new position
router.post('/api/add-positions', positionController.createPosition);

// Define the route for updating a position by ID
router.put('/api/add-positions/:id', positionController.updatePosition);

// Define the route for deleting a position by ID
router.delete('/api/add-positions/:id', positionController.deletePosition);

// Define the route for getting all positions
router.get('/api/add-positions', positionController.getPositions);

module.exports = router;
