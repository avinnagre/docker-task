const express = require('express');
const personController = require('../controllers/personController');
const router = express.Router();

router.get('/', personController.getPeople);
router.post('/', personController.createPerson);
router.put('/:id', personController.editPerson);
router.delete('/:id', personController.deletePerson);

module.exports = router;
