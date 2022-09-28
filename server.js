/* 
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

app.get("/", (req, res) => {
  res.send("Hello Express")
  console.log("Hello express")
})

app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM users";
  db.query(sqlGet, (error, result) => {
    if (error) {
      console.log(error);
    } res.send(result);
  });
});

app.post("/api/post", (req, res) => {
  const { name, email, contact } = req.body;
  const sqlInsert = "INSERT INTO users (name, email, contact) VALUES (?, ?, ?)"
  db.query(sqlInsert, [name, email, contact], (error, result) => {
    if (error) {
      console.log(error);
    };
  });
});

app.put("/api/update/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, contact } = req.body;
  const sqlUpdate = "UPDATE users SET name = ?, email = ?, contact = ? WHERE id = ?";

  db.query(sqlUpdate, [name, email, contact, id], (error, result) => {
    if (error) {
      console.log(error);
    } res.send(result);
  });
});

app.delete("/api/remove/:id", (req, res) => {
  const { id } = req.params;
  const sqlRemove = "DELETE FROM users WHERE id = ?"
  db.query(sqlRemove, id, (error, result) => {
    if (error) {
      console.log(error);
    };
  });
});

app.get("/api/get/:id", (req, res) => {
  const { id } = req.params;
  const sqlGet = "SELECT * FROM users WHERE id = ?";
  db.query(sqlGet, id, (error, result) => {
    if (error) {
      console.log(error);
    };
    res.send(result);
  });
}); 

app.listen(5000, () => {
  console.log("Server is listening on port 5000")
});
*/