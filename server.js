
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'tyoma1991',
  database: 'user_management'
});

app.use(express.static("build"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM users";
  db.query(sqlGet, (error, result) => {
    if (error) {
      console.log(error);
    } res.send(result);
  });
});

app.put("/api/block/:id", (req, res) => {
  const { id } = req.params;
  const { is_blocked } = req.body;
  const sqlUpdate = "UPDATE users SET is_blocked = 1 WHERE user_id = ?";

  db.query(sqlUpdate, [is_blocked, id], (error, result) => {
    if (error) {
      console.log(error);
    } res.send(result);
  });
});

app.put("/api/unblock/:id", (req, res) => {
  const { id } = req.params;
  const { is_blocked } = req.body;
  const sqlUpdate = "UPDATE users SET is_blocked = 0 WHERE user_id = ?";

  db.query(sqlUpdate, [is_blocked, id], (error, result) => {
    if (error) {
      console.log(error);
    } res.send(result);
  });
});

app.delete("/api/remove/:id", (req, res) => {
  const { id } = req.params;
  const sqlRemove = "DELETE FROM users WHERE user_id = ?"
  db.query(sqlRemove, id, (error, result) => {
    if (error) {
      console.log(error);
    };
  });
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000")
});

