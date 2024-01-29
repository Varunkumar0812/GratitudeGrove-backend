const express = require("express");
const userRoutes = require("./routes/userRoutes");
const journalRoutes = require("./routes/journalRoutes");
const goalRoutes = require("./routes/goalRoutes");
const entryController = require("./controllers/entryController");

const app = express();

app.use(express.json({ limit: "10kb" }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/users", userRoutes);
app.use("/api/journals", journalRoutes);
app.use("/api/goals", goalRoutes);
app.post("/api/entry", entryController.createEntry);

app.get("/hello", (req, res) => {
  res.send("Hello man!");
});

module.exports = app;
