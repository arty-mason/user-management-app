const DateTime = require("luxon").DateTime;
const { db } = require("./db");

const getRefreshTokenByValue = async (token) => {
  const sqlQuery = "SELECT * FROM refresh_tokens WHERE token = ?";
  const tokenInfo = await db.promise().query(sqlQuery, [token]);
  return tokenInfo;
};

const saveRefreshToken = async (userId, token) => {
  const sqlQuery =
    "INSERT INTO refresh_tokens (user_id, token, created_utc) VALUES (?, ?, ?)";
  const utcNow = DateTime.utc().toJSDate();
  await db.promise().query(sqlQuery, [userId, token, utcNow]);
}

module.exports = {
  getRefreshTokenByValue,
  saveRefreshToken,
};
