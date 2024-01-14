const express = require("express");
const userRoutes = require("./routes/userRoutes");
const journalRoutes = require("./routes/journalRoutes");
const goalRoutes = require("./routes/goalRoutes");

const app = express();

app.use(express.json({ limit: "10kb" }));

app.use("/api/users", userRoutes);
app.use("/api/journals", journalRoutes);
app.use("/api/goals", goalRoutes);

app.get("/hello", (req, res) => {
  res.send("Hello man!");
});

module.exports = app;
