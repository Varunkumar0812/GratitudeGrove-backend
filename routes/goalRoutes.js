const express = require("express");
const goalsController = require("../controllers/goalsController");

const router = express.Router();

router.route("/").get(goalsController.getAllGoals);
router
  .route("/:id")
  .get(goalsController.getGoal)
  .post(goalsController.createGoal)
  .delete(goalsController.deleteGoal);

module.exports = router;
