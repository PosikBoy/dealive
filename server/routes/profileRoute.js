// authRoute.js
const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController')
// Регистрация пользователя
router.get('/profileinfo', profileController.getProfileInfo);

router.put('/profileinfoupdate', profileController.updateProfileInfo)
module.exports = router;
