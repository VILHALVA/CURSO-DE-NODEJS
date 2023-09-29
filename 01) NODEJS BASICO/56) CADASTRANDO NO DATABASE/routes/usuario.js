const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/Usuario');
const Usuario = mongoose.model('usuarios');
const bcrypt = require('bcryptjs');

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
    else {
        Usuario.findOne({email: req.body.email}).then((usuario) => {
            if (usuario) {
                req.flash("error_msg", "JÁ EXISTE UMA CONTA COM ESSE EMAIL!");
                res.redirect("/usuarios/registro");
            }
            else {
                const novoUsuario = new Usuario({
                    nome: req.body.nome,
                    email: req.body.email,
                    senha: req.body.senha
                });

                bcrypt.genSalt(10, (erro, salt) => {
                    bcrypt.hash(novoUsuario.senha, salt, (erro, hash) => {
                        if (erro) {
                            req.flash("error_msg", "HOUVE UM ERRO AO SALVAR NOVO USUÁRIO!");
                            res.redirect("/");
                        }

                        novoUsuario.senha = hash;
                        novoUsuario.save().then(() => {
                            req.flash("success_msg", "NOVO USUÁRIO SALVO COM SUCESSO!");
                            res.redirect("/");
                        }).catch((err) => {
                            req.flash("error_msg", "HOUVE UM ERRO AO CRIAR NOVO USUÁRIO!");
                            res.redirect("/usuarios/registro");
                        });
                    });
                });
            }
        }).catch((err) => {
            req.flash("error_msg", "HOUVE UM ERRO INTERNO!");
            res.redirect("/");
        });
    }
});

module.exports = router;
