function operacaoMatematica(num1, operador, num2) {
    let resultado;

    if (operador === '+') {
        resultado = num1 + num2;
    } else if (operador === '-') {
        resultado = num1 - num2;
    } else if (operador === '*') {
        resultado = num1 * num2;
    } else if (operador === '/') {
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            document.write("Erro: Divisão por zero não é permitida!");
            return;
        }
    } else {
        document.write("Erro: Operador inválido!");
        return;
    }

    document.write("O resultado de " + num1 + " " + operador + " " + num2 + " é igual a " + resultado + ".<br>");
}

// Teste
operacaoMatematica(10, '+', 5);
operacaoMatematica(10, '-', 5);
operacaoMatematica(10, '*', 5);
operacaoMatematica(10, '/', 5);