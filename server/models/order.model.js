//order.model.js
const db = require("../config/db");
const jwt = require("jsonwebtoken");

exports.sendOrder = async (
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
) => {
  let userId = 0;
  if (token) {
    const decoded = jwt.verify(token, "posik");
    userId = decoded.userId; // Получение id пользователя
  }
  const sendOrderQuery =
    "INSERT INTO orders (client_id, status, date, parcel, weight, phone, price, address1, phone1, note1, address2, phone2, note2) VALUES (?, ?, NOW(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const [result] = await db.execute(sendOrderQuery, [
    userId,
    status,
    parcel,
    weight,
    phone,
    500,
    address1,
    phone1,
    note1,
    address2,
    phone2,
    note2,
  ]);
  return result;
};

exports.getOrders = async (token) => {
  const decoded = jwt.verify(token, "posik");
  const userId = decoded.userId;
  const getOrdersQuery =
    "SELECT * FROM orders WHERE client_id = ?  ORDER BY id DESC LIMIT 10";
  const [result] = await db.execute(getOrdersQuery, [userId]);
  return result;
};
