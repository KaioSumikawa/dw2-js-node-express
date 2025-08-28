let listaClientes = [
    {
        nome: "Maria Silva Santos",
        endereco: "Rua das Flores, 123 - Centro",
        cpf: "123.456.789-01"
    },
    {
        nome: "João Pedro Oliveira",
        endereco: "Av. Paulista, 456 - Bela Vista",
        cpf: "987.654.321-02"
    },
    {
        nome: "Ana Carolina Costa",
        endereco: "Rua Augusta, 789 - Consolação",
        cpf: "456.789.123-03" 
    }
];

function removerFormatacaoCPF(cpf) {
    let cpfLimpo = '';
    for (let i = 0; i < cpf.length; i++) {
        let char = cpf[i];
        if (char >= '0' && char <= '9') {
            cpfLimpo += char;
        }
    }
    return cpfLimpo;
}

function formatarCPF(cpf) {
    cpf = removerFormatacaoCPF(cpf);

    if (cpf.length === 11) {
        return cpf.substring(0,3) + '.' +
               cpf.substring(3,6) + '.' +
               cpf.substring(6,9) + '.' +
               cpf.substring(9,11);
    }
    return cpf;
}

function aplicarMascaraCPF() {
    document.getElementById('cpf').addEventListener('input', function(e)) {
        let value = removerFormatacaoCPF(e.target.value);

        if (value.length <= 11) {
            
            if (value.length > 9) {
                value = value.substring(0,3) + '.' +
                value = value.substring(0,3) + '.' +
                value = value.substring(0,3) + '.' +
                value = value.substring(0,3) + '.' +
            }
        }
    }
}