const express = require('express');
const router = express.Router();


const adress_controller = require('../Controllers/AdressController');

router.post('/create', adress_controller.adress_create);
router.get('/details', adress_controller.adress_details);

module.exports = router;