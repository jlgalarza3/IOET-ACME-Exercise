const { readFileSync } = require("fs");
const EMPLOYEE_DATA_FILENAME = "./employee-entry-control.txt";

const syncReadFile = (filename) => {
  try {
    const contents = readFileSync(filename, "utf-8");
    return contents;
  } catch (error) {
    console.log(error);
  }
};
