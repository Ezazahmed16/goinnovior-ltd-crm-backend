const userModel = require('../models/userModel');

// Create a new user
exports.createUser = (req, res) => {
  try {
    const { name, password, roles } = req.body;

    // Create a new user with the provided fields
    const newUser = new userModel({ name, password, roles });

    // Save the user to the database
    newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await userModel.find();

    // Return the list of users as JSON
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete User by id 
exports.deleteUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    // Check if the user exists
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Delete the user
    await user.deleteOne();

    res.status(204).json(); // Respond with no content (success)
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};