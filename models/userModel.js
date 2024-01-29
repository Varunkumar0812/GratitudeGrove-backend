const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const sha256 = require("sha256");

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

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
