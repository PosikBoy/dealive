//ordersController.js

const orderModel = require("../models/order.model");

exports.sendOrder = async (req, res) => {
  const {
    status,
    address1,
    phone1,
    note1,
    address2,
    phone2,
    note2,
    phone,
    weight,
    parcel,
  } = req.body;
  const bearerHeader = req.headers.authorization;
  try {
    const [, token] = bearerHeader.split(" ");
    const order = await orderModel.sendOrder(
      token,
      status,
      address1,
      phone1,
      note1,
      address2,
      phone2,
      note2,
      phone,
      weight,
      parcel
    );
    return res.status(201).json({ message: "post order successfully", order });
  } catch (error) {
    console.log(error);
  }
};

exports.getOrders = async (req, res) => {
  const bearerHeader = req.headers.authorization;
  try {
    const [, token] = bearerHeader.split(" ");
    if (token) {
      const orders = await orderModel.getOrders(token);
      return res
        .status(201)
        .json({ message: "Get order successfully", orders });
    }
  } catch (error) {
    console.log(error);
  }
};
