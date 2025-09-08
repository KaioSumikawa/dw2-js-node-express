const listaClientes = [
    {
        nome: "Takeshi Yamamoto",
        endereco: "Tokyo-to, Shibuya-ku, Harajuku 2-15-3",
        cpf: 12345678901
    },
    {
        nome: "Sakura Tanaka",
        endereco: "Osaka-fu, Namba-ku, Dotonbori 4-7-12",
        cpf: 98765432100
    },
    {
        nome: "Hiroshi Suzuki",
        endereco: "Kyoto-shi, Gion-machi, Hanami-koji 8-22-5",
        cpf: 11122233344
    }
];

document.write("<h2>Lista de Clientes Inicial:</h2>");

listaClientes.forEach(function(cliente) {
    document.write(`Nome: ${cliente.nome}<br>`);
    document.write(`Endereço: ${cliente.endereco}<br>`);
    document.write(`CPF: ${cliente.cpf}<br><br>`);
});

const novoClienteFinal = {
    nome: "Yuki Watanabe",
    endereco: "Yokohama-shi, Minato Mirai 3-9-1",
    cpf: 55566677788
};

listaClientes.push(novoClienteFinal);

document.write("<h2>Lista após adicionar cliente no FINAL:</h2>");

listaClientes.forEach(function(cliente) {
    document.write(`Nome: ${cliente.nome}<br>`);
    document.write(`Endereço: ${cliente.endereco}<br>`);
    document.write(`CPF: ${cliente.cpf}<br><br>`);
});

const novoClienteInicio = {
    nome: "Akira Nakamura",
    endereco: "Nagoya-shi, Sakae-machi 6-14-7",
    cpf: 99988877766
};

listaClientes.unshift(novoClienteInicio);

document.write("<h2>Lista após adicionar cliente no INÍCIO:</h2>");

listaClientes.forEach(function(cliente) {
    document.write(`Nome: ${cliente.nome}<br>`);
    document.write(`Endereço: ${cliente.endereco}<br>`);
    document.write(`CPF: ${cliente.cpf}<br><br>`);
});

document.write("<h2>Array de objetos completo:</h2>");
document.write("<pre>");
document.write(JSON.stringify(listaClientes, null, 2));
document.write("</pre>");