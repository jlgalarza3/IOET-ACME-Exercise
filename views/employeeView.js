//Import Controller: Compare Employee Schedule Controller
const {
  getResult,
} = require("../controllers/compareEmployeeScheduleController");

// **** View Function **** //
// Prints the result of the comparison.
const view = () => {
  console.log(getResult());
};

module.exports = {
  view,
};
