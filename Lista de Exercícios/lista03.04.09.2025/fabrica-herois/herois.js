// Classe base Heroi
class Heroi {
  constructor(nome, vida, velocidade, forca) {
    this.nome = nome;
    this.vida = vida;
    this.velocidade = velocidade;
    this.forca = forca;
  }

  correr() {
    return `${this.nome} está correndo!`;
  }

  andar() {
    return `${this.nome} está andando!`;
  }

  atacar() {
    return `${this.nome} está atacando!`;
  }

  defender() {
    return `${this.nome} está se defendendo!`;
  }
}

// Homem-Aranha
class HomemAranha extends Heroi {
  constructor(nome, vida, velocidade, forca, teia) {
    super(nome, vida, velocidade, forca);
    this.teia = teia; // 0 ou 1
  }

  sentidoAranha() {
    return `${this.nome} detectou perigo com o Sentido Aranha!`;
  }
}

// Superman
class Superman extends Heroi {
  constructor(nome, vida, velocidade, forca, podeVoar) {
    super(nome, vida, velocidade, forca);
    this.podeVoar = podeVoar; // 0 ou 1
  }

  visaoCalor() {
    return `${this.nome} está usando sua Visão de Calor!`;
  }
}

// Batman
class Batman extends Heroi {
  constructor(nome, vida, velocidade, forca, esconder) {
    super(nome, vida, velocidade, forca);
    this.esconder = esconder; // 0 ou 1
  }

  investigar() {
    return `${this.nome} está investigando um crime!`;
  }
}

// Instanciando heróis
const homemAranha = new HomemAranha("Homem-Aranha", 80, 90, 70, 1);
const superman = new Superman("Superman", 100, 95, 100, 1);
const batman = new Batman("Batman", 85, 70, 80, 1);

// Exibindo no navegador
const saida = document.getElementById("saida");
saida.innerHTML = `
  <p>${batman.correr()}</p>
  <p>${superman.nome} tem força ${superman.forca}</p>
  <p>${homemAranha.sentidoAranha()}</p>
  <p>${superman.visaoCalor()}</p>
  <p>${batman.investigar()}</p>
`;