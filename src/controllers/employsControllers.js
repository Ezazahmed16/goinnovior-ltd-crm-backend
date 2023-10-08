const Employ = require('../models/employsModel');

// Get all Employ records
exports.getAllEmploy = (req, res) => {
  Employ.find()
    .then((employs) => {
      res.json(employs);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || 'Some error occurred while retrieving employs.',
      });
    });
};

// Get data based on status
exports.getDataByStatus = async (req, res) => {
  const { status } = req.params;

  try {
    const statusFilters = {
      processOne: { currentStatus: 'processOne' },
      selectedInterview: { currentStatus: 'selectedInterview' },
      waitingForRole: { currentStatus: 'waitingForRole' },
      employ: { currentStatus: 'employ' },
    };

    if (!(status in statusFilters)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const filter = statusFilters[status];
    const employ = await Employ.find(filter);

    return res.status(200).json({ employ });
  } catch (error) {
    console.error('Error fetching data:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


// Create and save a new Employ record
exports.createEmploy = (req, res) => {
  const employ = new Employ({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    resumeLink: req.body.resumeLink,
    currentStatus: req.body.currentStatus || '',
    resumeAddDate: req.body.resumeAddDate || '',
    InterviewEvulationDate: req.body.InterviewEvulationDate || '',
    AppointmentDate: req.body.AppointmentDate || '',
    LeaveDate: req.body.LeaveDate || '',
  });

  employ
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || 'Some error occurred while creating the Employ record.',
      });
    });
};

// Update an Employ record by ID
exports.updateEmploy = (req, res) => {
  const id = req.params.id;

  if (!req.body) {
    return res.status(400).json({
      message: 'Data to update cannot be empty',
    });
  }

  Employ.findByIdAndUpdate(id, req.body, { new: true })
    .then((employ) => {
      if (!employ) {
        return res.status(404).json({
          message: `Employ with ID ${id} not found`,
        });
      }
      res.json(employ);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || `Error updating Employ with ID ${id}`,
      });
    });
};

// Delete an Employ record by ID
exports.deleteEmploy = (req, res) => {
  const id = req.params.id;

  Employ.findByIdAndRemove(id)
    .then((employ) => {
      if (!employ) {
        return res.status(404).json({
          message: `Employ with ID ${id} not found`,
        });
      }
      res.json({ message: 'Employ deleted successfully' });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || `Could not delete Employ with ID ${id}`,
      });
    });
};
