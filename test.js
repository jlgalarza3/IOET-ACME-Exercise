//Import Testing Functions
const { main } = require(".");
const {
  removeUnnecessaryCharacters,
} = require("./controllers/dataPreprocessingController");
const {
  compareEmployeeSchedule,
  getResult,
} = require("./controllers/compareEmployeeScheduleController");

// -------------------------------------------------------------- //

// **** Testing getResult Function **** //
//Case 1: Testing if output is a string type
test("getResult function should return a string", () => {
  expect(typeof getResult()).toBe("string");
});

//Case 2: Testing if output is a string with the correct content
test("getResult function should return a string with the correct output", () => {
  const expectedResult =
    "ASTRID-RENE: 2\nASTRID-ANDRES: 3\nASTRID-JORGE: 2\nASTRID-CARLOS: 2\nRENE-ANDRES: 2\nRENE-JORGE: 2\nRENE-CARLOS: 2\nANDRES-JORGE: 2\nANDRES-CARLOS: 2\nJORGE-CARLOS: 1\n";
  expect(getResult()).toBe(expectedResult);
});

// -------------------------------------------------------------- //

// **** Testing removeUnnecessaryCharacters function **** //
//Case 1: Input contains only unnecessary characters
test("removeUnnecessaryCharacters function must return a string free of unnecessary characters", () => {
  const input = "ASTRID=MO10?:00 -12:00,*TH12:00-14:0/0,SU20:00-21_:00";
  const output = "ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00";
  expect(removeUnnecessaryCharacters(input)).toBe(output);
});

//Case 2: Input contains blank spaces
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

// -------------------------------------------------------------- //
