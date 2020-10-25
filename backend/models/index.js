const path = require("path");
const csv = require("csv-parser");
const fs = require("fs");

var Exercises = [];
fs.createReadStream(path.resolve(__dirname, "initData", "exercises.csv"))
  .pipe(csv())
  .on("data", (row) => {
    Exercises.push(row);
  })
  .on("end", () => {
    console.log("Read data successfully");
    console.log(Exercises);
    module.exports = Exercises;
  });
