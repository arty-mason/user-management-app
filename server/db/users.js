const DateTime = require("luxon").DateTime;
const { db } = require("./db");

const getUserByEmail = async (email) => {
  const sqlQuery = "SELECT * FROM users WHERE email = ?";
  const user = await db.promise().query(sqlQuery, [email]);
  return user.length > 0 ? user[0] : null;
};

const createUser = async (email, fullName, hashedPassword, salt) => {
  const utcNow = DateTime.utc().toJSDate();
  const sqlQuery =
    "INSERT INTO users (email, full_name, hashed_password, salt, created_utc, last_login_utc, is_blocked) VALUES (?, ?, ?, ?, ?, ?, ?)";

  await db
    .promise()
    .query(sqlQuery, [
      email,
      fullName,
      hashedPassword,
      salt,
      utcNow,
      utcNow,
      0,
    ]);
};

module.exports = {
  getUserByEmail,
  createUser,
};
