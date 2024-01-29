const mongoose = require("mongoose");

const entrySchema = mongoose.Schema({
  content: {
    type: String,
    required: [true, "Please provide some content"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;
