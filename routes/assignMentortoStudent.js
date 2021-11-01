const router = require("express").Router();

const { student, mentor } = require("../shared/db");

router.post("/", async (req, res) => {
  console.log("assignmentortostudent");
  //req -> has mentor id + studentsId
  //to do : add students to mentor & viceversa
  res.send("assignmentortostudent");
});

module.exports = router;
