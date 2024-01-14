const Journal = require("../models/journalModel");

exports.getAllJournals = async (req, res, next) => {
  try {
    const journals = await Journal.find();

    res.status(200).json({
      status: "success",
      data: {
        results: journals.length,
        journals,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.getJournal = async (req, res, next) => {
  try {
    const journal = await Journal.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        journal,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.updateJournal = async (req, res, next) => {
  try {
    const journal = await Journal.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      status: "success",
      data: {
        journal,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.createJournal = async (req, res, next) => {
  try {
    req.body.date = Date.now();
    const jounral = await Journal.create(req.body);

    res.status(200).json({
      status: "success",
      data: {
        message: "Create journal was success",
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};
