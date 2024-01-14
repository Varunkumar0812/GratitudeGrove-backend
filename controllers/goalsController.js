exports.getAllGoals = (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: {
      message: "Get all Goals was success",
    },
  });
};

exports.getGoal = (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: {
      message: "Get Goal was success",
    },
  });
};

exports.createGoal = (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: {
      message: "Create Goal was success",
    },
  });
};

exports.deleteGoal = (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: {
      message: "Delete Goal was success",
    },
  });
};
