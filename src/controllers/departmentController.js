// controllers/departmentController.js
const Department = require('../models/departmentSchema');

// Get all departments
exports.getAllDepartments = async (req, res) => {
    try {
        const departments = await Department.find();
        res.json(departments);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Create a new department
exports.createDepartment = async (req, res) => {
    const { departmentName } = req.body;

    try {
        const department = await Department.create({ departmentName });
        res.status(201).json(department);
    } catch (error) {
        res.status(400).json({ error: 'Bad request' });
    }
};

// Delete a department by ID
exports.deleteDepartment = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedDepartment = await Department.findByIdAndRemove(id);
        if (!deletedDepartment) {
            return res.status(404).json({ error: 'Department not found' });
        }
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update a department by ID
exports.updateDepartment = async (req, res) => {
    const { id } = req.params;
    const { departmentName } = req.body;

    try {
        const updatedDepartment = await Department.findByIdAndUpdate(
            id,
            { departmentName },
            { new: true }
        );
        if (!updatedDepartment) {
            return res.status(404).json({ error: 'Department not found' });
        }
        res.json(updatedDepartment);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
