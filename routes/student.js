const express = require("express");
const router = express.Router();

const { student } = require("../shared/db");

router.get("/", async (req, res) => {
  console.log("get all Students");
  try {
    const data = await student.find();
    res.send(data);
  } catch (e) {
    res.send(e);
  }
});

router.post("/", async (req, res) => {
  console.log("Student create route");
  try {
    const data = await student.create({
      name: req.body.name,
      email: req.body.email,
      course: req.body.course,
      mentorAssigned: req.body.mentorAssigned,
    });
    res.send(data);
  } catch (e) {
    console.log("error");
    res.status(400).send("Error in student POST");
  }
});

router.put("/", (req, res) => {
  res.send("Student edit route");
});

router.delete("/", (req, res) => {
  res.send("Student delete route");
});

module.exports = router;
