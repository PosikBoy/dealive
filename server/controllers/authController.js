const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "posik";
// authController.js
const userModel = require("../models/user.model");

exports.register = async (req, res) => {
  try {
    const { login, email, password } = req.body;
    // Проверка, что все необходимые поля заполнены
    if (!login || !email || !password) {
      return res.status(400).json({ message: "Заполните все поля" });
    }

    // Проверка, что пользователь с таким email не существует
    const existingUser = await userModel.getByLogin(login);
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Пользователь с таким логином уже существует" });
    }

    const userId = await userModel.createAuth(login, email, password);
    // Создание и отправка JWT токена

    const token = jwt.sign({ userId, login, email }, JWT_SECRET);
    return res
      .status(201)
      .json({ message: "User registered successfully", token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Аутентификация пользователя
exports.login = async (req, res) => {
  try {
    const { login, password } = req.body;

    // Проверка, что все необходимые поля заполнены
    if (!login || !password) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }

    const user = await userModel.getByLogin(login);

    if (!user) {
      return res.status(401).json({ message: "Пользователь не найден!" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.hash_pass);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Неверный пароль" });
    }

    // Создание и отправка JWT токена
    const token = jwt.sign(
      { userId: user.id, login: user.login, email: user.email },
      JWT_SECRET
    );
    return res.status(200).json({ message: "ok", token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
