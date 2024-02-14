const db = require("../config/db");
const jwt = require("jsonwebtoken");

exports.getProfile = async (token) => {
  const decoded = jwt.verify(token, "posik");
  const userId = decoded.userId;
  const getProfileQuery = "SELECT * FROM clients WHERE id = ?";
  const [result] = await db.execute(getProfileQuery, [userId]);
  return result;
};

exports.updateProfile = async (token, name, surname, email, phone_number) => {
  const decoded = jwt.verify(token, "posik");
  const userId = decoded.userId;
  const getProfileQuery =
    "UPDATE clients SET name = ?,surname = ?, email = ?, phone_number = ? WHERE id = ?";
  const [result] = await db.execute(getProfileQuery, [
    name,
    surname,
    email,
    phone_number,
    userId,
  ]);
  return result;
};
