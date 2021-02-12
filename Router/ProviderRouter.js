const provider_controller = require('../Controllers/ProviderController');
const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /provider:
 *    post:
 *     summary: Add a new provider
 *     description: "Adding a new provider"
 *     parameters:
 *       - name: body
 *         description: content of provider items.
 *         in: body
 *         schema:
 *           $ref: '#/definitions/Provider'
 *         required: true
 *     responses:
 *       201:
 *         description: |
 *           The request has succeeded.
 */
router.post('/create', provider_controller.provider_create);
router.get('/details', provider_controller.provider_details);
router.get('/detailsId/:id',provider_controller.provider_detailsId)
router.put('/update-provider/:id', provider_controller.provider_update);
router.delete('/delete-provider/:id', provider_controller.provider_delete);
module.exports = router;