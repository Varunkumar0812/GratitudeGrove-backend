const Entry = require("../models/entryModel");

exports.createEntry = async (req, res, next) => {
  try {
    const entry = await Entry.create(req.body);

    res.status(200).json({
      status: "success",
      data: entry,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
