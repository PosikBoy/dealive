//review.module.js
const db = require("../config/db");
const jwt = require("jsonwebtoken");

exports.sendReview = async (
  token,
  rating,
  advantages,
  disadvantages,
  description
) => {
  const decoded = jwt.verify(token, "posik");
  const userId = decoded.userId; // Получение id пользователя
  const sendReviewQuery =
    "INSERT INTO reviews (client_id, rating, advantages, disadvantages, description) VALUES ( ?, ?, ?, ?, ?)";
  const [result] = await db.execute(sendReviewQuery, [
    userId,
    rating,
    advantages,
    disadvantages,
    description,
  ]);
  return result;
};
