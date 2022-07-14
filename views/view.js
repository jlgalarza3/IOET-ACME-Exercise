//Import Controller: Compare Employee Schedule Controller
const {
  getResult,
} = require("../controllers/compareEmployeeScheduleController");

// **** View Function **** //
// Calls the functions to read the data, clean the data, and compare the schedules.
// Returns and print a string with the result of the comparison
const view = () => {
  console.log(getResult());
};

module.exports = {
  view,
};
