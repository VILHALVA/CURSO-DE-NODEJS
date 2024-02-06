var http = require('http');

http.createServer(function(req, res) {
    res.end("SEJA BEM VINDO! VOCÊ ESTÁ ACESSANDO O SERVIDOR NODEJS!");
}).listen(8081);

console.log("O SERVIDOR ESTÁ RODANDO!");
