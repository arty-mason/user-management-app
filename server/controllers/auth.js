const express = require("express");
const { signUp, signIn } = require("../services/auth");

const router = express.Router();

router.post("/api/signup", async (req, res) => {
  try {
    const { email, password, fullName } = req.body;
    const result = await signUp({ email, password, fullName });

    if (result.isSucces) {
      res.send(result);
    } else {
      res.status(400).send(result);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Unexpected server error" });
  }
});

router.post("/api/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await signIn({ email, password });

    if (result.isSucces) {
      res.send(result);
    } else {
      res.status(400).send(result);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Unexpected server error" });
  }
});

module.exports = router
