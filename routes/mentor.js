const express = require("express");
const router = express.Router();

const { mentor } = require("../shared/db");

router.get("/", (req, res) => {
  res.send("get all mentors");
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

router.put("/", (req, res) => {
  res.send("mentor edit route");
});

router.delete("/", (req, res) => {
  res.send("mentor delete route");
});

module.exports = router;
