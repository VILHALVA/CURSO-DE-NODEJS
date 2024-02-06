const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const Post = require('./models/Post');
const { sequelize } = require('./models/db');

// Configuração do Handlebars
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
  },
}));
app.set('view engine', 'handlebars');

// Configuração do Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota para exibir a lista de posts
app.get('/', function(req, res) {
  Post.findAll({order: [['id', 'DESC']]}).then(function(posts) {
    res.render('home', { posts: posts });
  });
});

app.get('/cad', function(req, res){
  res.render("FORMULARIO");
});

// Rota para processar o formulário
app.post('/cad', function(req, res){
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
  })
  .then(() => {
    res.redirect('/');
  })
  .catch((erro) => {
    res.send("OCORREU UM ERRO: " + erro);
  });
});

// Inicie o servidor
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
