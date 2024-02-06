const express = require('express');
const router = express.Router();

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

module.exports = router;