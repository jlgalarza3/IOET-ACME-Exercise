//Imports
const { readFileSync } = require("fs");
const { Employee } = require("../models/employeeModel");

/*************************** Preprocessing Data  *************************** */

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
          index, //id
          line[0], //name
          // ** Schedule: ** //
          //Day would be only the two first characters of the string
          //Time would be as of the string after the two first characters
          //Split the string by "-", getting array of interval of time
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

// Input: Array of employee objects
// Process: Compare the schedules of each employee based on coincidence of day and time
// Output: String of the result of the comparison: "Name1+Name2: Coincidence in day and time"
const compareEmployeeSchedule = (employeeJsonData) => {
  try {
    let result = "";

    //Iterate through the array of employee objects
    for (let i = 0; i < employeeJsonData.length; i++) {
      for (let j = i + 1; j < employeeJsonData.length; j++) {
        //Asign employee A-B to compare schedule to a variable
        const scheduleEmployeeA = employeeJsonData[i].schedule;
        const scheduleEmployeeB = employeeJsonData[j].schedule;

        //Count Variable to count the coincidence of day and time
        let count = 0;

        //Iterate through the array of schedules of each employee
        for (let k = 0; k < scheduleEmployeeA.length; k++) {
          for (let l = 0; l < scheduleEmployeeB.length; l++) {
            //If the day and time of the schedule of employee A is the same as the schedule of employee B
            //And the time of entry and exit of the schedule of employee A matches the schedule time of employee B
            //Count the coincidence of day and time
            if (
              scheduleEmployeeA[k].day === scheduleEmployeeB[l].day &&
              scheduleEmployeeA[k].time[0] <= scheduleEmployeeB[l].time[1] &&
              scheduleEmployeeA[k].time[1] >= scheduleEmployeeB[l].time[0]
            ) {
              count++;
            }
          }
        }
        //Result will be the name of the employees that have the same schedule and the coincidence of day and time
        result += `${employeeJsonData[i].name}-${employeeJsonData[j].name}: ${count}\n`;
      }
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};

// Calls the functions to read the data, clean the data, and compare the schedules.
// Returns a string with the result of the comparison
const getResult = (employeeFilename) => {
  const dataString = syncReadFile(employeeFilename);
  const removedCharacters = removeUnnecessaryCharacters(dataString);
  const employeeObjectArray = orderDataToArrayOfEmployees(removedCharacters);
  const result = compareEmployeeSchedule(employeeObjectArray);
  return result;
};

// Export the function to be used in the other files.
module.exports = {
  compareEmployeeSchedule,
  getResult,
  syncReadFile,
  orderDataToArrayOfEmployees,
  removeUnnecessaryCharacters,
};
