const express = require("express");
/*
 *const Exercises = require("./models");
 */
const app = express();
const port = 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/api/exercises", (req, res) => {
  const Exercises = [
    {
      id: 1,
      name: "Exercise 1",
      description: "Exercise 1 info",
      level: "beginner",
    },
    {
      id: 2,
      name: "Exercise 2",
      description: "Exercise 2 info",
      level: "intermediate",
    },
    {
      id: 3,
      name: "Exercise 3",
      description: "Exercise 3 info",
      level: "advanced",
    },
  ];
  res.json(Exercises);
});
