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

// FUNÇÃO COM MAIS DE UM PARÂMETROS
const n1 = 10;
const n2 = 12;

function mult(n1,n2) {
  // Essa função recebe dois parâmetros
  let result = n1 * n2
  document.write(`A multiplicação de ${n1} e ${n2} é igual a ${result}`)
}
mult(n1,n2)

// FUNÇÃO COM RETORNO
const num1 = 1000
const num2 = 5;

function div(num1, num2) {
  return num1 / num2
}
document.write(`<p>A divisão de ${num1} por ${num2} é igual a ${div(num1,num2)}`)

// FUNÇÃO COM DIFERENTES RETORNOS
const number = 7;

function parImpar(number) {
  if (number % 2 == 0) {
    return 'par'
  } else {
    return "impar";
  }
}
document.write(`<p>O número ${number} é <strong>${parImpar(number)}</strong>.`)