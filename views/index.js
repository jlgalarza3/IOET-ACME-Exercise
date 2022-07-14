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

// **** Main Function **** //
// Calls the functions to read the data, clean the data, and compare the schedules.
// Returns a string with the result of the comparison
main = () => {
  const dataString = syncReadFile(EMPLOYEE_DATA_FILENAME);
  const removedCharacters = removeUnnecessaryCharacters(dataString);
  const employeeObjectArray = orderDataToArrayOfEmployees(removedCharacters);
  const result = compareEmployeeSchedule(employeeObjectArray);
  console.log(result);
  return result;
};

// Call the main function
main();
