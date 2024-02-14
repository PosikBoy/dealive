// authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const ordersController = require('../controllers/ordersController')
// Регистрация пользователя
router.post('/register', authController.register);

// Аутентификация пользователя
router.post('/login', authController.login);

router.get('/orders', ordersController.getOrders);

module.exports = router;