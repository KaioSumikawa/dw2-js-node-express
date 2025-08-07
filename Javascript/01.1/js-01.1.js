// VARIABLES CAN BE DECLARED IN 3 WAYS:
// VAR, LET, and CONST
// VAR: In general, avoid using it; it may not be very safe.
// LET: Use it when the variable needs to be reassigned.
// CONST: Use it when the variable does NOT need to be reassigned.

// var name = "Diego"
// var name = "Maria"
// let city = "Registro"
// let city = "Pariquera" // NOT ALLOWED
// let address
// address = "Some Street..."
// const age // NOT ALLOWED
// const age = 18
// age = 20 // NOT ALLOWED

// TYPES OF FUNCTIONS
// SIMPLE FUNCTION
const message = "<h2>Hello! Welcome! This is your first function!</h2>";

function showMessage() {
  document.write(message);
}
// Calling the function
showMessage();

// FUNCTION WITH PARAMETERS
const user = "Diego Max";

function userMessage(user) {
  // This function receives a parameter
  document.write(`<h3>What would you like to do today, ${user} ?</h3>`);
  // ${} -> Template Strings / Literal Strings
  // Used to insert variables inside STRINGS (BACKTICKS)
}
userMessage(user); // ARGUMENT
