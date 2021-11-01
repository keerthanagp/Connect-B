const mongoose = require("mongoose");
const schema = mongoose.Schema;

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("DB Connected");
  } catch (e) {
    console.log(e.message, "error");
  }
};

const studentSchema = schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  course: {
    type: String,
    required: true,
  },
  mentorAssigned: {
    type: String,
    default: null,
  },
});

const student = mongoose.model("student", studentSchema, "student");

const mentorSchema = schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  expertise: {
    type: String,
    required: true,
  },
  studentsAssigned: {
    type: Array,
    required: true,
  },
});

const mentor = mongoose.model("mentor", mentorSchema, "mentor");

module.exports = { dbConnect, student, mentor };
