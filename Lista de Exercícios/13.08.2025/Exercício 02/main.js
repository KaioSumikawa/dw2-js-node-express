const operacoes = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => b !== 0 ? a / b : "Erro: divisão por zero"
};

function operacaoMatematica(num1, operador, num2) {
  const calcular = operacoes[operador];
  if (calcular) {
    document.write(`O resultado de ${num1} ${operador} ${num2} é igual a ${calcular(num1, num2)}.<br>`);
  } else {
    document.write("Erro: Operador inválido!<br>");
  }
}

operacaoMatematica(10, '+', 5);
operacaoMatematica(10, '-', 5);
operacaoMatematica(10, '*', 5);
operacaoMatematica(10, '/', 5);
operacaoMatematica(10, '/', 0);
operacaoMatematica(10, '%', 5);
