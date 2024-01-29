const express = require("express");
const goalsController = require("../controllers/goalsController");

const router = express.Router();

router
  .route("/")
  .get(goalsController.getAllGoals)
  .post(goalsController.createGoal);
router
  .route("/:id")
  .get(goalsController.getGoal)
  .delete(goalsController.deleteGoal);

module.exports = router;
