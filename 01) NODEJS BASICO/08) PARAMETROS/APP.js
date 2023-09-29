const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("SEJA BEM VINDO AO MEU APP");
    // DIGITE NO NAVEGADOR: 'http://localhost:8081/'
});

app.get("/ola/:nome", function(req, res) {
    res.send("<h1>OLÁ "+req.params.nome+ "</h1>");
    // DIGITE NO NAVEGADOR: 'http://localhost:8081/ola/nome'
});

app.listen(8081, function() {
    console.log("O SERVIDOR ESTÁ RODANDO NA URL: http://localhost:8081/");
});