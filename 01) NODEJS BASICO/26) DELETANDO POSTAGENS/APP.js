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

// Rota para excluir postagem
app.get('/deletar/:id', function(req, res) {
  const postId = req.params.id;

  Post.destroy({
    where: {
      id: postId
    }
  })
  .then(() => {
    res.send("POSTAGEM DELETADA COM SUCESSO!");
  })
  .catch((erro) => {
    res.send("OCORREU UM ERRO: " + erro);
  });
});

app.get('/edit/:id', function(req, res){
  Post.findByPk(req.params.id)
    .then(post => {
      res.render('form-edit', {
        id: req.params.id,
        titulo: post.titulo,
        conteudo: post.conteudo
      })
    })
    .catch(err => {
      res.send('Post não encontrado!')
    })
})
app.post('/editado/:id', function(req, res){
  Post.update({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
  },
  {
    where: { id: req.params.id }
  }).then(function(){
    res.redirect('/')
  }).catch(function(err){
    console.log(err);
  })
})

// Inicie o servidor
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
