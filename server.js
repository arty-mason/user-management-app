const express = require("express");
const crypto = require("crypto");
const DateTime = require("luxon").DateTime;
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "tyoma1991",
  database: "user_management",
});

const getPasswordHash = (password, salt, iterations, keylen, digest) => {
  return new Promise((res, rej) => {
    crypto.pbkdf2(password, salt, 31000, 32, "sha256", (err, key) => {
      err ? rej(err) : res(key.toString('base64'));
    });
  });
};

const mapModelToDTO = (model) => {
  const isBlocked = Boolean(model.is_blocked.readInt8());

  const dto = {
    id: model.user_id,
    name: model.full_name,
    email: model.email,
    createdUTC: model.created_utc,
    lastLoginUTC: model.last_login_utc,
    status: isBlocked ? "Blocked" : "Unblocked",
  };

  return dto;
};

app.use(express.static("build"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.post("/api/signup", async (req, res, next) => {
  const { email, password, fullName } = req.body;

  try {
    const salt = crypto.randomBytes(16);
    const hashedPassword = await getPasswordHash(password, salt);

    const utcNow = DateTime.utc().toJSDate();
    const sqlQuery =
      "INSERT INTO users (email, full_name, hashed_password, salt, created_utc, last_login_utc, is_blocked) VALUES (?, ?, ?, ?, ?, ?, ?)";

    await db.promise().query(sqlQuery, [email, fullName, hashedPassword, salt.toString('base64'), utcNow, utcNow, 0]);

    // const user = {
    //   id,
    //   email,
    // }
    // req.logIn()
    res.status(200).json({ message: "OK" });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM users";
  db.query(sqlGet, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result.map((item) => mapModelToDTO(item)));
  });
});

app.put("/api/block/:id", (req, res) => {
  const { id } = req.params;
  const { is_blocked } = req.body;
  const sqlUpdate = "UPDATE users SET is_blocked = 1 WHERE user_id = ?";

  db.query(sqlUpdate, [is_blocked, id], (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

app.put("/api/unblock/:id", (req, res) => {
  const { id } = req.params;
  const { is_blocked } = req.body;
  const sqlUpdate = "UPDATE users SET is_blocked = 0 WHERE user_id = ?";

  db.query(sqlUpdate, [is_blocked, id], (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

app.delete("/api/remove/:id", (req, res) => {
  const { id } = req.params;
  const sqlRemove = "DELETE FROM users WHERE user_id = ?";
  db.query(sqlRemove, id, (error, result) => {
    if (error) {
      console.log(error);
    }
  });
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
