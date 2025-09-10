let listaClientes = [
    {
        nome: "Tanaka Kenji",
        endereco: "1-2-1 Marunouchi, Chiyoda-ku, Tokyo 100-0005",
        myNumber: "1234-5678-9012"
    },
    {
        nome: "Sato Aiko",
        endereco: "2-3-1 Shinjuku, Shinjuku-ku, Tokyo 160-0022",
        myNumber: "9876-5432-1098"
    },
    {
        nome: "Suzuki Hanako",
        endereco: "3-4-1 Ginza, Chuo-ku, Tokyo 104-0061",
        myNumber: "4567-8901-2345" 
    }
];

function removerFormatacaoMyNumber(myNumber) {
    let myNumberLimpo = '';
    for (let i = 0; i < myNumber.length; i++) {
        let char = myNumber[i];
        if (char >= '0' && char <= '9') {
            myNumberLimpo += char;
        }
    }
    return myNumberLimpo;
}

function formatarMyNumber(myNumber) {
    myNumber = removerFormatacaoMyNumber(myNumber);

    if (myNumber.length === 12) {
        return myNumber.substring(0,4) + '-' +
               myNumber.substring(4,8) + '-' +
               myNumber.substring(8,12);
    }
    return myNumber;
}

function aplicarMascaraMyNumber() {
    document.getElementById('myNumber').addEventListener('input', function(e) {
        let value = removerFormatacaoMyNumber(e.target.value);

        if (value.length <= 12) {
            let formattedValue = '';
            for (let i = 0; i < value.length; i++) {
                if (i > 0 && i % 4 === 0) {
                    formattedValue += '-';
                }
                formattedValue += value[i];
            }
            e.target.value = formattedValue;
        }
    });
}