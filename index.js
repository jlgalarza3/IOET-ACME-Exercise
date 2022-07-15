const { getResult } = require("./controllers/employeeController");
const { view } = require("./views/employeeView");

const EMPLOYEE_DATA_FILENAME = "./data/employee-entry-control.txt";

const main = () => {
  const result = getResult(EMPLOYEE_DATA_FILENAME);
  view(result);
};

main();
