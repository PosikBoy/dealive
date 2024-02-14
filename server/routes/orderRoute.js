// orderRoutes.js
const express = require('express');
const router = express.Router();
const ordersController = require("../controllers/ordersController")

router.post('/sendorder', ordersController.sendOrder);

router.get('/getorders', ordersController.getOrders)

module.exports = router;