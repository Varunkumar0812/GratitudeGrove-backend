const mongoose = require("mongoose");

const goalSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Goal must belong to a user"],
  },
  startTime: {
    type: Date,
  },
  endTime: {
    type: Date,
  },
  daysCount: {
    type: Number,
  },
  entriesCount: {
    type: Number,
  },
});

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;
