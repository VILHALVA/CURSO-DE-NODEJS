const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("PÁGINA PRINCIPAL");
});

router.get('/posts', (req, res) => {
    res.send("PÁGINA DE POSTS");
});

router.get('/categorias', (req, res) => {
    res.send("PÁGINA DE CATEGORIAS");
});

module.exports = router;