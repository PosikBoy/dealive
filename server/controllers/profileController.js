const profileModel = require("../models/profile.model");

exports.getProfileInfo = async (req, res) => {
  const bearerHeader = req.headers.authorization;
  console.log("ip adress is ", req);
  try {
    const [, token] = bearerHeader.split(" ");
    if (token) {
      const profile = await profileModel.getProfile(token);
      console.log(profile);
      return res.status(200).json({ message: "get data succesful", profile });
    } else {
      return res.status(401).json({ message: "Требуется авторизация" });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateProfileInfo = async (req, res) => {
  const { name, surname, email, phone_number } = req.body;
  const bearerHeader = req.headers.authorization;
  try {
    const [, token] = bearerHeader.split(" ");
    const profile = await profileModel.updateProfile(
      token,
      name,
      surname,
      email,
      phone_number
    );
    return res
      .status(201)
      .json({ message: "Данные профиля успешно обновлены", profile });
  } catch (error) {
    console.log(error);
  }
};
