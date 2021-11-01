const express = require("express");
const router = express.Router();

const { mentor } = require("../shared/db");

router.get("/", async (req, res) => {
  console.log("get all mentors");
  try {
    const data = await mentor.find();
    res.send(data);
  } catch (e) {
    console.log(e, "error");
    res.status(400).send(e);
  }
});

router.post("/", async (req, res) => {
  console.log("mentor create route");
  try {
    const data = await mentor.create({
      name: req.body.name,
      email: req.body.email,
      expertise: req.body.expertise,
      studentsAssigned: req.body.studentsAssigned,
    });
    res.send(data);
  } catch (e) {
    console.log(e, "error");
    res.status(400).send("Error");
  }
});

module.exports = router;
