import express from "express";
const router = express.Router();
// Importando o Model de Cliente
import Cliente from "../models/Cliente.js";

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  // SELECT * FROM CLIENTES
  Cliente.findAll().then(clientes => {
    // then => Promessa bem sucedida
    res.render("clientes", {
      clientes: clientes,
    });
    // catch => Falha na resolução da promessa
  }).catch(error => {
    console.log(error)
  });
});

// ROTA DE CADASTRO DE CLIENTES
router.post("/clientes/new", (req, res) => {
  // COLETANDO OS DADOS DO FORMULÁRIO
  const nome = req.body.nome
  const cpf = req.body.cpf
  const endereco = req.body.endereco
  Cliente.create({
    // coluna : dado do form
    nome : nome,
    cpf : cpf,
    endereco : endereco
  }).then(() => {
    res.redirect("/clientes")
  }).catch(error => {
    console.log(error);
  });
});

// ROTA DE EXCLUSÃO DE CLIENTE
// :id é um parâmetro obrigatório
router.get("/clientes/delete/:id", (req, res) => {
  const id =req.params.id
  // .destroy() -> excluir um registro do banco
  Cliente.destroy({
    where: {
      id: id,
    },
  }).then(() => {
    res.redirect("/clientes")
  }).catch(error => {
    console.log(error)
  });
});

export default router;
