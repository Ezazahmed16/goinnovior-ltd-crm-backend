// newLeadController.js
const NewLead = require('../models/newLeadModel');

// Create a new lead
exports.createLead = async (req, res) => {
    try {
        const {
            firstname,
            lastname,
            email,
            phoneNumbers,
            whatsappNumber,
            companyName,
            position,
            department,
        } = req.body;

        // Validate the incoming data (you can use Joi or similar)
        if (!firstname || !email) {
            return res.status(400).json({ message: 'Invalid input data' });
        }

        // Calculate fullName if needed
        const fullName = `${firstname} ${lastname}`;
        // Create a new lead with the provided fields
        const newLead = new NewLead({
            firstname,
            lastname,
            fullName,
            email,
            phoneNumbers,
            whatsappNumber,
            companyName,
            position,
            department,
        });

        // Save the new lead to the database
        await newLead.save();

        res.status(201).json({ message: 'New lead created successfully' });
    } catch (error) {
        console.error('Error creating new lead:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

// Get all leads
exports.getAllLeads = async (req, res) => {
    try {
        // Fetch all leads from the database
        const leads = await NewLead.find();

        // Return the list of leads as JSON
        res.status(200).json(leads);
    } catch (error) {
        console.error('Error fetching leads:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete lead by id
exports.deleteLeadById = async (req, res) => {
    try {
        const leadId = req.params.id;

        // Check if the lead exists
        const lead = await NewLead.findById(leadId);

        if (!lead) {
            return res.status(404).json({ message: 'Lead not found' });
        }

        // Delete the lead
        await lead.remove();

        res.status(204).json(); // Respond with no content (success)
    } catch (error) {
        console.error('Error deleting lead:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
