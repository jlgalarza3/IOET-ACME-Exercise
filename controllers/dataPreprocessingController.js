//Import readFileSync function from fs module: file system
const { readFileSync } = require("fs");
//Import Employee class Model
const { Employee } = require("../models/employeeModel");

// Sync Import of the employee data from the file
// Returns content String of the data readed.
const syncReadFile = (filename) => {
  try {
    const contents = readFileSync(filename, "utf-8");
    return contents;
  } catch (error) {
    console.log(error);
  }
};

//Remove the unnecessary characters from the employee string
//Returns a string without the unnecessary characters.
const removeUnnecessaryCharacters = (input) => {
  try {
    //Regular expression to remove the unnecessary characters except used characters: "=", ",", "-"
    const regex = /[`~!@#$%^&*()_|+\?;'".<>\{\}\[\]\\\/]/gi;
    return input.replace(regex, "");
  } catch (error) {
    console.log(error);
  }
};

// Clean the employee data, spliting by characteres
// Asigns the data to the Employee object
// Returns an array of Employee objects.
const orderDataToArrayOfEmployees = (input) => {
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

// Export the functions to be used in the other files.
module.exports = {
  syncReadFile,
  orderDataToArrayOfEmployees,
  removeUnnecessaryCharacters,
};
