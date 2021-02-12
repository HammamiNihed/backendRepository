const express = require('express');
const router = express.Router();
const dayshours_controller = require('../Controllers/DaysHoursController');

router.post('/hours',dayshours_controller.dayshours_create);

module.exports = router;