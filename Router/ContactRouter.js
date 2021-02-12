const express = require('express');
const router = express.Router();


const contact_controller = require('../Controllers/ContactController');

router.post('/create', contact_controller.contact_create);
router.get('/details', contact_controller.contact_details);

module.exports = router;