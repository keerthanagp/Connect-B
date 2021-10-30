const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("get all mentors");
});

router.post("/", (req, res) => {
  res.send("mentor create route");
});

router.put("/", (req, res) => {
  res.send("mentor edit route");
});

router.delete("/", (req, res) => {
  res.send("mentor delete route");
});

module.exports = router;
