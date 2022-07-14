//Import view function from view.js
const {
  getResult,
} = require("./controllers/compareEmployeeScheduleController");
const { view } = require("./views/employeeView");
const EMPLOYEE_DATA_FILENAME = "./data/employee-entry-control.txt";

// **** MAIN Function **** //
// Calls the getResult function and passes the filename as an argument.
// Calls the view function to print the result of the comparison.
const main = () => {
  const result = getResult(EMPLOYEE_DATA_FILENAME);
  view(result);
};

//Call the main function
main();
