const dataAtual = new Date();
document.write("<h3>Data e Hora Atuais:</h3>");
document.write("<p>" + dataAtual.toString() + "</p>");

const compraInternacional = 500.75;
document.write("<h3>Valor da Compra (USD):</h3>");
document.write("<p>$" + compraInternacional.toFixed(2) + "</p>");

const cotacaoDolar = 5.25; 
const compraEmReais = compraInternacional * cotacaoDolar;
document.write("<h3>Valor da Compra (BRL):</h3>");
document.write("<p>R$" + compraEmReais.toFixed(2) + "</p>");

const dataEntrega = new Date();
dataEntrega.setDate(dataAtual.getDate() + 12);

const dia = String(dataEntrega.getDate()).padStart(2, '0');
const mes = String(dataEntrega.getMonth() + 1).padStart(2, '0');
const ano = dataEntrega.getFullYear();

document.write("<h3>Data de Entrega Estimada:</h3>");
document.write("<p>" + dia + "/" + mes + "/" + ano + "</p>");