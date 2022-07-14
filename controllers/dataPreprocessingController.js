const { readFileSync } = require("fs");
const { Employee } = require("../models/employeeModel");

const syncReadFile = (filename) => {
  try {
    const contents = readFileSync(filename, "utf-8");
    return contents;
  } catch (error) {
    console.log(error);
  }
};

const cleanData = (input) => {
  try {
    let employeeObjectArray = input
      .split("\n")
      .map((line) => line.split("="))
      .map((line, index) => {
        return new Employee(
          index,
          line[0],
          line[1].split(",").map((schedule) => {
            return {
              day: schedule.substring(0, 2),
              time: schedule.substring(2).split("-"),
            };
          })
        );
      });
    return employeeObjectArray;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  syncReadFile,
  cleanData,
};
