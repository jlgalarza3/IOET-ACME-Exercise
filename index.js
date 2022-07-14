//Import view function from view.js
const { view } = require("./views/view");

// **** MAIN Function **** //
// Calls the view function to print the result of the comparison.
const main = () => {
  return view();
};

//Call the main function
main();

//Export the main function to be used in testing
module.exports = {
  main,
};
