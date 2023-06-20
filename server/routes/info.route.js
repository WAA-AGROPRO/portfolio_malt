const express = require('express');
const router = express.Router();
const infoCtrl = require('../controllers/info.controller');

router.post('/', infoCtrl.createInfo);
router.post('/send-email', infoCtrl.sendEmail);
router.get('/', infoCtrl.getAllInfo);
router.get('/:id', infoCtrl.getOneInfo);
router.delete('/:id', infoCtrl.deleteInfo);

module.exports = router;