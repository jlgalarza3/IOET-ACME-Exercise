//Import Controller: Compare Employee Schedule Controller
const {
  getResult,
} = require("../controllers/compareEmployeeScheduleController");

// **** View Function **** //
// Prints the result of the comparison.
const view = (result) => {
  console.log(result);
};

module.exports = {
  view,
};
