const express = require('express');
const router = express.Router();
const {
    createDataEntry,
    getDataEntries,
    getDataEntry,
    updateDataEntry,
    deleteDataEntry
} = require('../controllers/shorelineDataController');

router.post('/', createDataEntry);
router.get('/', getDataEntries);
router.get('/:id', getDataEntry);
router.put('/:id', updateDataEntry);
router.delete('/:id', deleteDataEntry);

module.exports = router;
