const express = require('express');
const router = express.Router();


const rating_controller = require('../Controllers/RatingController');

router.post('/create', rating_controller.rating_create);
router.get('/details', rating_controller.rating_details);
router.put('/:id/update', rating_controller.rating_update);

module.exports = router;