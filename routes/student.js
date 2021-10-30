const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("get all Students");
});

router.post("/", (req, res) => {
  res.send("Student create route");
});

router.put("/", (req, res) => {
  res.send("Student edit route");
});

router.delete("/", (req, res) => {
  res.send("Student delete route");
});

module.exports = router;
