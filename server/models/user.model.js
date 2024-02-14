//user.model.js

const db = require("../config/db");
const bcrypt = require("bcrypt");

exports.createAuth = async (login, email, password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const createUserQuery =
      "INSERT INTO users_auth (login, hash_pass) VALUES (?, ?)";
    const [result] = await db.execute(createUserQuery, [login, hashedPassword]);
    if (result.insertId) {
      const createClientQuery =
        "INSERT INTO clients (email, users_auth_id) VALUES (?, ?)";
      const [final] = await db.execute(createClientQuery, [
        email,
        result.insertId,
      ]);
    } else {
      // Обработка случая, если insertId равно undefined
      console.log("Insert ID is undefined");
    }
    return result.insertId;
  } catch (error) {
    console.log(error);
  }
};

exports.getByLogin = async (login) => {
  try {
    const getUserQuery =
      "SELECT users_auth.id,users_auth.login, users_auth.hash_pass, clients.email FROM users_auth INNER JOIN clients ON clients.users_auth_id = users_auth.id WHERE login = ?";
    const [rows] = await db.execute(getUserQuery, [login]);
    return rows[0];
  } catch (error) {
    console.log(error);
  }
};
