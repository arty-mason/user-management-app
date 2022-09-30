const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "tyoma1991",
  database: "user_management",
});

module.exports = { db };
