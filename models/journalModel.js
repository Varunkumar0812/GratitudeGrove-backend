const mongoose = require("mongoose");

const journalSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "A Journal must have a name"],
    unique: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "A journal must belong to a user"],
  },
  entries: [{ type: mongoose.Schema.ObjectId, ref: "Entry" }],
  date: {
    type: Date,
    required: [true, "Please provide the creation date"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Journal = mongoose.model("Journal", journalSchema);

module.exports = Journal;
