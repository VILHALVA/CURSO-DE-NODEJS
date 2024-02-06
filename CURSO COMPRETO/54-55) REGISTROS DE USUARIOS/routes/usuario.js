const express = require('express');
const router = express.Router;
const mongoose = express('mongoose');
require('../models/Usuario');
const Usuario = mongoose.model('usuarios');

router.get('/registro', (req, res) => {
    res.render('usuarios/registro');
});

router.post('/registro', (req, res) => {
    var erros = [];

    if (!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null) {
        erros.push({texto: "NOME INVÁLIDO!"});
    }
    if (!req.body.email || typeof req.body.email == undefined || req.body.email == null) {
        erros.push({texto: "E-MAIL INVÁLIDO!"});
    }
    if (!req.body.senha || typeof req.body.senha == undefined || req.body.senha == null) {
        erros.push({texto: "SENHA INVÁLIDA!"});
    }
    if (req.body.senha.length < 4) {
        erros.push({texto: "SENHA MUITO CURTA!"});
    }
    if (req.body.senha != req.body.senha2) {
        erros.push({texto: "ERRO! AS SENHAS SÃO DIFERENTES!"});
    }
    if (erros.length > 0) {
        res.render('usuarios/registro', {erros: erros});
    }
});

module.exports = router;