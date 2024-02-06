const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("SEJA BEM VINDO AO MEU APP");
    // DIGITE NO NAVEGADOR: 'http://localhost:8081/'
});

app.get("/sobre", function(req, res) {
    res.send("MINHA PÁGINA SOBRE");
    // DIGITE NO NAVEGADOR: 'http://localhost:8081/sobre'
});

app.get("/blog", function(req, res) {
    res.send("BEM VINDO AO MEU BLOG");
    // DIGITE NO NAVEGADOR: 'http://localhost:8081/blog'
});

app.listen(8081, function() {
    console.log("O SERVIDOR ESTÁ RODANDO NA URL: http://localhost:8081/");
});