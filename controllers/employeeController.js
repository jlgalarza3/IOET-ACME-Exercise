const { readFileSync } = require("fs");
const { Employee } = require("../models/employeeModel");

/*************************** Preprocessing Data  *************************** */
// Sync Import of the employee data from the file
const syncReadFile = (filename) => {
  try {
    const contents = readFileSync(filename, "utf-8");
    return contents;
  } catch (error) {
    console.log(error);
  }
};

//Remove the unnecessary characters from the employee string by regex
const removeUnnecessaryCharacters = (input) => {
  try {
    const regex = /[`~!@#$%^&*()_|+\?;'".<>\{\}\[\]\\\/ ]/gi;
    return input.replace(regex, "");
  } catch (error) {
    console.log(error);
  }
};

// 1. Clean the employee data, spliting by characteres
// 2. Asigns the data to the Employee object
// 3. Returns an array of Employee objects.
const orderDataToArrayOfEmployees = (input) => {
  try {
    let employeeObjectArray = input
      .split("\n")
      .map((line) => line.split("="))
      .map((line, index) => {
        //Create a new Employee object and assign the data to it for each line
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

//Algorithm to compare the schedules of each employee
const compareEmployeeSchedule = (arrayOfEmployees) => {
  try {
    let result = "";
    for (let i = 0; i < arrayOfEmployees.length; i++) {
      for (let j = i + 1; j < arrayOfEmployees.length; j++) {
        //Asign employee A-B to compare schedule to a variable
        const scheduleEmployeeA = arrayOfEmployees[i].schedule;
        const scheduleEmployeeB = arrayOfEmployees[j].schedule;

        //Count Variable to count the coincidence of day and time
        let count = 0;

        //Iterate through the array of schedules of each employee, compare day and times
        for (let k = 0; k < scheduleEmployeeA.length; k++) {
          for (let l = 0; l < scheduleEmployeeB.length; l++) {
            if (
              scheduleEmployeeA[k].day === scheduleEmployeeB[l].day &&
              scheduleEmployeeA[k].time[0] <= scheduleEmployeeB[l].time[1] &&
              scheduleEmployeeA[k].time[1] >= scheduleEmployeeB[l].time[0]
            ) {
              count++;
            }
          }
        }
        result += `${arrayOfEmployees[i].name}-${arrayOfEmployees[j].name}: ${count}\n`;
      }
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};

// Calls the functions to read the data, clean the data, and compare the schedules.
const getResult = (employeeFilename) => {
  const dataString = syncReadFile(employeeFilename);
  const removedCharacters = removeUnnecessaryCharacters(dataString);
  const employeeObjectArray = orderDataToArrayOfEmployees(removedCharacters);
  const result = compareEmployeeSchedule(employeeObjectArray);
  return result;
};

module.exports = {
  compareEmployeeSchedule,
  getResult,
  syncReadFile,
  orderDataToArrayOfEmployees,
  removeUnnecessaryCharacters,
};
