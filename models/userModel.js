const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
    lowercase: true,
  },
  firstName: {
    type: String,
    required: [true, "Please tell us your first name"],
  },
  lastName: {
    type: String,
    required: [true, "Please tell us your last name"],
  },
  age: {
    type: Number,
    required: [true, "Please tell us your age"],
    min: [1, "Age must be above 1"],
    max: [150, "Age must be below 150"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please provide a confirm password"],
    validate: {
      validator: function (el) {
        return this.password === el;
      },
      message: "Passwords doesn't match",
    },
  },
  passwordChangedAt: Date,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
