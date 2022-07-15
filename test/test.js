const EMPLOYEE_DATA_FILENAME = "./data/employee-entry-control.txt";
const EMPLOYEE_DATA_FILENAME_IOET_EXAMPLE1 =
  "./data/employee-entry-control-example1.txt";
const EMPLOYEE_DATA_FILENAME_IOET_EXAMPLE2 =
  "./data/employee-entry-control-example2.txt";

const {
  getResult,
  removeUnnecessaryCharacters,
} = require("../controllers/employeeController");

// ------------------------ Testing getResult Function --------------------------- //
test("getResult function should return a string", () => {
  expect(typeof getResult(EMPLOYEE_DATA_FILENAME)).toBe("string");
});

test("getResult function should return a string with the correct output", () => {
  const expectedResult =
    "ASTRID-RENE: 2\nASTRID-ANDRES: 3\nASTRID-JORGE: 2\nASTRID-CARLOS: 2\nRENE-ANDRES: 2\nRENE-JORGE: 2\nRENE-CARLOS: 2\nANDRES-JORGE: 2\nANDRES-CARLOS: 2\nJORGE-CARLOS: 1\n";
  expect(getResult(EMPLOYEE_DATA_FILENAME)).toBe(expectedResult);
});

test("getResult function should return a string with the correct output: IOET Example 1", () => {
  const expectedResult = "RENE-ASTRID: 2\nRENE-ANDRES: 2\nASTRID-ANDRES: 3\n";
  expect(getResult(EMPLOYEE_DATA_FILENAME_IOET_EXAMPLE1)).toBe(expectedResult);
});
test("getResult function should return a string with the correct output: IOET Example 2", () => {
  const expectedResult = "RENE-ASTRID: 3\n";
  expect(getResult(EMPLOYEE_DATA_FILENAME_IOET_EXAMPLE2)).toBe(expectedResult);
});

// ------------------------ Testing removeUnnecessaryCharacters function --------------------------- //
test("removeUnnecessaryCharacters function must return a string free of unnecessary characters", () => {
  const input = "ASTRID=MO10?:00 -12:00,*TH12:00-14:0/0,SU20:00-21_:00";
  const output = "ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00";
  expect(removeUnnecessaryCharacters(input)).toBe(output);
});

test("removeUnnecessaryCharacters function must return a string free of blank spaces", () => {
  const input = "ASTRI D=MO10:00-12:00,TH12:00-14 :00,SU20:0 0-21: 00";
  const output = "ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00";
  expect(removeUnnecessaryCharacters(input)).toBe(output);
});

//Case 3: Input contains unnecessary characters and blank spaces
test("removeUnnecessaryCharacters function must return a string free of unnecessary characters and blank spaces", () => {
  const input = "ASTRI D=MO10:&00/-12:00,TH12+:00-1/4 _:00,SU20:0_ 0-21: ?0?0";
  const output = "ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00";
  expect(removeUnnecessaryCharacters(input)).toBe(output);
});
