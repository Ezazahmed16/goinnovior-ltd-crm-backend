// controllers/positionController.js
const Position = require('../models/addPositionModel');

// Controller function to create a new position
const createPosition = async (req, res) => {
    try {
        const { position } = req.body;
        const newPosition = new Position({ positionName: position });
        await newPosition.save();
        console.log(newPosition)
        res.status(201).json(newPosition);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller function to update a position by ID
const updatePosition = async (req, res) => {
    try {
        const { id } = req.params;
        const { position } = req.body;

        const updatedPosition = await Position.findByIdAndUpdate(
            id,
            { positionName: position },
            { new: true }
        );

        if (!updatedPosition) {
            return res.status(404).json({ error: 'Position not found' });
        }

        res.json(updatedPosition);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller function to delete a position by ID
const deletePosition = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedPosition = await Position.findByIdAndDelete(id);

        if (!deletedPosition) {
            return res.status(404).json({ error: 'Position not found' });
        }

        res.json(deletedPosition);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller function to get all positions
const getPositions = async (req, res) => {
    try {
      const positions = await Position.find();
      res.json(positions);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

module.exports = {
    createPosition,
    updatePosition,
    deletePosition,
    getPositions,
};
