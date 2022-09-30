const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const {
  getRefreshTokenByValue,
  saveRefreshToken,
} = require("../db/refreshTokens");

const JWT_LIFETIME = 1000 * 60 * 60 * 3;
const JWT_SECRET = "sdfsadfsda";

const randomTokenString = () => {
  return crypto.randomBytes(50).toString("hex");
};

const getRefreshToken = async (token) => {
  const refreshToken = await getRefreshTokenByValue(token);
  if (!refreshToken) {
    return null;
  }
  return refreshToken;
};

const generateJwtToken = (userId, email) => {
  const jwtContent = {
    id: userId,
    email: email,
  };

  return jwt.sign(jwtContent, JWT_SECRET, { expiresIn: JWT_LIFETIME });
};

const generateRefreshToken = async (userId) => {
  const token = randomTokenString();
  await saveRefreshToken(userId, token);

  return token;
};

module.exports = {
  getRefreshToken,
  generateJwtToken,
  generateRefreshToken,
};
