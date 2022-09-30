const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const authRouter = require("./controllers/auth");

const app = express();

app.use(express.static("build"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(authRouter);

const startServer = () => {
  app.listen(5000, () => {
    console.log("Server is listening on port 5000");
  });
};

module.exports = {
  startServer,
};
