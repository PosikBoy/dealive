const reviewModel = require("../models/review.model.js");

exports.sendReview = async (req, res) => {
  const { rating, advantages, disadvantages, description } = req.body;
  const bearerHeader = req.headers.authorization;
  try {
    const [, token] = bearerHeader.split(" ");
    const review = await reviewModel.sendReview(
      token,
      rating,
      advantages,
      disadvantages,
      description
    );
    return res.status(201).json({ message: "query was successful", review });
  } catch (error) {
    console.log(error);
  }
};
