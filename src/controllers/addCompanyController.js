// controllers/companyController.js
const Company = require('../models/addCompanyModel');

// GET: Get all companies
exports.getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find();
        res.json(companies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching companies.' });
    }
};

// GET: Get a single company by ID
exports.getCompanyById = async (req, res) => {
    try {
        const companyId = req.params.id;
        const company = await Company.findById(companyId);

        if (!company) {
            return res.status(404).json({ error: 'Company not found.' });
        }

        res.json(company);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching the company.' });
    }
};

// POST: Create a new company
exports.createCompany = async (req, res) => {
    try {
        const {
            companyName,
            companyType,
            email,
            number,
            whatsappNumber,
            linkedinUrl,
            companyWebsite,
            companyCountry,
            companyCity,
            companyArea,
        } = req.body;

        const newCompany = new Company({
            companyName,
            companyType,
            email,
            number,
            whatsappNumber,
            linkedinUrl,
            companyWebsite,
            companyAddress: {
                companyCountry,
                companyCity,
                companyArea,
            },
        });

        const savedCompany = await newCompany.save();

        res.status(201).json(savedCompany);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while adding the company.' });
    }
};

// PUT: Update a company by ID
exports.updateCompanyById = async (req, res) => {
    try {
        const companyId = req.params.id;
        const updatedData = req.body;

        const updatedCompany = await Company.findByIdAndUpdate(companyId, updatedData, { new: true });

        if (!updatedCompany) {
            return res.status(404).json({ error: 'Company not found.' });
        }

        res.json(updatedCompany);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while updating the company.' });
    }
};

// DELETE: Delete a company by ID
exports.deleteCompanyById = async (req, res) => {
    try {
        const companyId = req.params.id;
        const deletedCompany = await Company.findByIdAndDelete(companyId);

        if (!deletedCompany) {
            return res.status(404).json({ error: 'Company not found.' });
        }

        res.json(deletedCompany);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while deleting the company.' });
    }
};
