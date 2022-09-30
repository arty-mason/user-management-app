const crypto = require("crypto");
const { getUserByEmail, createUser } = require("../db/users");
const {
  getRefreshToken,
  generateJwtToken,
  generateRefreshToken,
} = require("./tokens");

const getPasswordHash = (password, salt) => {
  return new Promise((res, rej) => {
    crypto.pbkdf2(password, salt, 31000, 32, "sha256", (err, key) => {
      err ? rej(err) : res(key.toString("base64"));
    });
  });
};

const makeAuthResponse = async (userId, email) => {
  const jwtToken = generateJwtToken(userId, email);
  const refreshToken = await generateRefreshToken(userId);

  return { jwtToken, refreshToken };
};

const signUp = async ({ email, password, fullName }) => {
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { isSucces: false, errorMessage: "User already exists" };
  }

  const salt = crypto.randomBytes(16);
  const hashedPassword = await getPasswordHash(password, salt);

  await createUser(email, fullName, hashedPassword, salt);
  const { user_id } = await getUserByEmail(email);

  const res = await makeAuthResponse(user_id, email);
  return { isSucces: true, ...res };
};

const signIn = async ({ email, password }) => {
  const user = await getUserByEmail(email);
  if (!user) {
    return { isSucces: false, errorMessage: "Email is not correct" };
  }

  const hashedPassword = await getPasswordHash(password, Buffer.from(user.salt, "base64"));

  if (hashedPassword !== user.hashedPassword) {
    return { isSucces: false, errorMessage: "Password is not correct" };
  }

  const res = await makeAuthResponse(user.user_id, email);
  return { isCreated: true, ...res };
}

module.exports = {
  signUp,
  signIn,
}
