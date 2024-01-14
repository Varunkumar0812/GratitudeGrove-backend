const express = require("express");
const journalsController = require("../controllers/journalsController");

const router = express.Router();

router
  .route("/")
  .get(journalsController.getAllJournals)
  .post(journalsController.createJournal);
router
  .route("/:id")
  .get(journalsController.getJournal)
  .patch(journalsController.updateJournal);

module.exports = router;
