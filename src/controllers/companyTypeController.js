const CompanyType = require('../models/companyTypeModel');

// Create a new company type
exports.createCompanyType = async (req, res) => {
  try {
    const { name } = req.body;
    const companyType = new CompanyType({ name });
    await companyType.save();
    res.status(201).json({ message: 'Company type created successfully', companyType: name });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all company types
exports.getAllCompanyTypes = async (req, res) => {
  try {
    const companyTypes = await CompanyType.find();
    res.status(200).json(companyTypes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a company type by ID
exports.getCompanyTypeById = async (req, res) => {
  try {
    const companyType = await CompanyType.findById(req.params.id);
    if (!companyType) {
      return res.status(404).json({ error: 'Company type not found' });
    }
    res.status(200).json(companyType);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a company type by ID
exports.updateCompanyType = async (req, res) => {
  try {
    const { name } = req.body;
    const companyType = await CompanyType.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true }
    );
    if (!companyType) {
      return res.status(404).json({ error: 'Company type not found' });
    }
    res.status(200).json({ message: 'Company type updated successfully', companyType });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a company type by ID
exports.deleteCompanyType = async (req, res) => {
  try {
    const companyType = await CompanyType.findByIdAndRemove(req.params.id);
    if (!companyType) {
      return res.status(404).json({ error: 'Company type not found' });
    }
    res.status(200).json({ message: 'Company type deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
