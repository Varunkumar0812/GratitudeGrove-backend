const Goal = require("../models/goalModel");

exports.getAllGoals = async (req, res, next) => {
  try {
    const goals = await Goal.find();

    res.status(200).json({
      status: "success",
      data: {
        results: goals.length,
        goals,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.getGoal = async (req, res, next) => {
  try {
    const goal = await Goal.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        goal,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.createGoal = async (req, res, next) => {
  try {
    const goal = await Goal.create(req.body);

    res.status(200).json({
      status: "success",
      data: {
        goal,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.deleteGoal = async (req, res, next) => {
  try {
    const goal = await Goal.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      message: "Deleted Successfully !",
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};
