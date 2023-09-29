const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require("../models/Categorias");
const Categoria = mongoose.model("categorias");

router.get('/', (req, res) => {
    res.render(__dirname + '/../models/views/admin/index');
});

router.get('/posts', (req, res) => {
    res.send("PÁGINA DE POSTS");
});

router.get('/categorias', (req, res) => {
    res.render("admin/categorias");
});

router.get('/categorias/add', (req, res) => {
    res.render("admin/addcategorias");
});

router.post('/categorias/nova', (req, res) => {
    const novaCategoria = {
        nome: req.body.nome,
        slug: req.body.slug
    }

    new Categoria(novaCategoria).save().then(() => {
        console.log("CATEGORIA SALVA COM SUCESSO!");
    }).catch((err) => {
        console.log("ERRO AO SALVAR CATEGORIA: "+err);
    });
});

module.exports = router;