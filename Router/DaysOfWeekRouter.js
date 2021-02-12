const express = require('express');
const router = express.Router();

const dayofweek_controller = require('../Controllers/DayOfWeekController');

router.post('/create', dayofweek_controller.dayofweek_create);
router.get('/days', dayofweek_controller.dayofweek_details);


module.exports = router;



