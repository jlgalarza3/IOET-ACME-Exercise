const {
  compareEmployeeSchedule,
} = require("../controllers/compareEmployeeScheduleController");
const {
  syncReadFile,
  cleanData,
} = require("../controllers/dataPreprocessingController");

const EMPLOYEE_DATA_FILENAME = "./employee-entry-control.txt";

const data = syncReadFile(EMPLOYEE_DATA_FILENAME);
const employeeObjectArray = cleanData(data);
const result = compareEmployeeSchedule(employeeObjectArray);
console.log(result);
