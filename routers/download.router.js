const express = require('express');
const router = express.Router();
const userController = require('../controllers/download.controller');

router.get('/', userController.down);

router.post('/s', userController.postdown);

module.exports = router;
