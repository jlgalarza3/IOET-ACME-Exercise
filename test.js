const { main } = require(".");

test("main function should return a string", () => {
  expect(typeof main()).toBe("string");
});

test("main function should return a string with the correct output", () => {
  const expectedResult =
    "ASTRID-RENE: 2\nASTRID-ANDRES: 3\nASTRID-JORGE: 2\nASTRID-CARLOS: 2\nRENE-ANDRES: 2\nRENE-JORGE: 2\nRENE-CARLOS: 2\nANDRES-JORGE: 2\nANDRES-CARLOS: 2\nJORGE-CARLOS: 1\n";
  expect(main()).toBe(expectedResult);
});
