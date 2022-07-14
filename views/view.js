//Import Filename as a string
const EMPLOYEE_DATA_FILENAME = "./employee-entry-control.txt";

//Import Controller: Compare Employee Schedule Controller
const {
  compareEmployeeSchedule,
} = require("../controllers/compareEmployeeScheduleController");

//Import Controller: Data Preprocessing Controller functions
const {
  syncReadFile,
  orderDataToArrayOfEmployees,
  removeUnnecessaryCharacters,
} = require("../controllers/dataPreprocessingController");

// **** View Function **** //
// Calls the functions to read the data, clean the data, and compare the schedules.
// Returns and print a string with the result of the comparison
const view = () => {
  const dataString = syncReadFile(EMPLOYEE_DATA_FILENAME);
  const removedCharacters = removeUnnecessaryCharacters(dataString);
  const employeeObjectArray = orderDataToArrayOfEmployees(removedCharacters);
  const result = compareEmployeeSchedule(employeeObjectArray);
  console.log(result);
  return result;
};

module.exports = {
  view,
};
