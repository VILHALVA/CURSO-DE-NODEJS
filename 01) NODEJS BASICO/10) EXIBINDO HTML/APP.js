const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.sendFile("APP.html", {root: __dirname});
    // DIGITE NO NAVEGADOR: 'http://localhost:8081/'
});

app.listen(8081, function() {
    console.log("O SERVIDOR ESTÁ RODANDO NA URL: http://localhost:8081/");
});