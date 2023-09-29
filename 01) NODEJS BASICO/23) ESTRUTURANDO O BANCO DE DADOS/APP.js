const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

// TAMPLATE ENGINE:
app.engine('handlebars', exphbs({ defaultLayout: 'main' })); 
app.set('view engine', 'handlebars');

// BODY PARSER
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// ROTAS:
app.get('/', function(req, res) {
  res.send('Bem-vindo à página inicial!');
});

// Rota para exibir o formulário HTML
app.get('/cad', function(req, res){
  res.render("FORMULARIO");
});

app.post('/cad', function(req, res){
  const titulo = req.body.titulo;
  const conteudo = req.body.conteudo;
  res.send(`TITULO: ${titulo} - CONTEÚDO: ${conteudo}`);
});

