const ShorelineData = require('../models/ShorelineData');

// Create a new data entry
exports.createDataEntry = async (req, res) => {
    try {
        const dataEntry = await ShorelineData.create(req.body);
        res.status(200).json(dataEntry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all data entries
exports.getDataEntries = async (req, res) => {
    try {
        const dataEntries = await ShorelineData.find({});
        res.status(200).json(dataEntries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single data entry by ID
exports.getDataEntry = async (req, res) => {
    try {
        const { id } = req.params;
        const dataEntry = await ShorelineData.findById(id);
        res.status(200).json(dataEntry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a data entry
exports.updateDataEntry = async (req, res) => {
    try {
        const { id } = req.params;
        const dataEntry = await ShorelineData.findByIdAndUpdate(id, req.body, { new: true });
        if (!dataEntry) {
            return res.status(404).json({ message: "Data entry not found" });
        }
        res.status(200).json(dataEntry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a data entry
exports.deleteDataEntry = async (req, res) => {
    try {
        const { id } = req.params;
        const dataEntry = await ShorelineData.findByIdAndDelete(id);
        if (!dataEntry) {
            return res.status(404).json({ message: "Data entry not found" });
        }
        res.status(200).json({ message: "Data entry deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
