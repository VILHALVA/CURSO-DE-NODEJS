// CARREGANDO MÓDULOS
const express = require('express');
const handlebars = require('express-handlebars'); 
const bodyParser = require('body-parser');
const app = express();
const admin = require('./routes/admin');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');
require("./models/Postagem");
const Postagem = mongoose.model("postagens");
require("./models/Categoria");
const Categoria = mongoose.model("categorias");
const usuarios = require('./routes/usuario');
const passport = require("passport");
require("/config/auth")(passport);

// CONFIGURAÇÕES:
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const handlebars = require('express-handlebars');
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname + "/public")));

app.use(session ({
  secret: "cursodenode",
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  next();
});


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/aprendendo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Conexão com o MongoDB estabelecida com sucesso");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao MongoDB:", error);
  });

// ROTAS:
app.get("/categorias", (req, res) => {
    Categoria.find().then((categorias) => {
        res.render("categorias/index", {categorias: categorias});
    }).catch((err) => {
      req.flash("error_msg", "HOUVE UM ERRO AO LISTAR CATEGORIAS!");
      res.redirect("/");
  });
});

app.get("/categorias/:slug", (req, res) => {
  Categoria.findOne({slug: req.params.slug}).then((categoria) => {
      if (categoria) {
        Postagem.find({categoria: categoria._id}).then((postagens) => {
          res.render("categorias/postagens", {postagens: postagens, categoria: categoria});
      }).catch((err) => {
        req.flash("error_msg", "HOUVE UM ERRO AO LISTAR OS POSTS!");
        res.redirect("/");
    });;
      }
      else {
        req.flash("error_msg", "HOUVE UM ERRO: ESTA CATEGORIA NÃO EXISTE!");
        res.redirect("/");
      }
  }).catch((err) => {
    req.flash("error_msg", "HOUVE UM ERRO AO CARREGAR PÁGINA DESTA CATEGORIA!");
    res.redirect("/");
  });
});

app.get("/", (req, res) => {
    Postagem.find().populate("categoria").sort({date: "desc"}).then((postagens) => {
      res.render("index", {postagens: postagens});
    }).catch((err) => {
      req.flash("error_msg", "HOUVE UM ERRO AO EXIBIR POSTAGENS: "+err);
      res.redirect("/404");
  });
});

app.get('/postagem/:slug', (req,res) => {
  const slug = req.params.slug
  Postagem.findOne({slug})
      .then(postagem => {
          if(postagem){
              const post = {
                  titulo: postagem.titulo,
                  data: postagem.data,
                  conteudo: postagem.conteudo
              }
              res.render('postagem/index', post)
          }
          else {
              req.flash("error_msg", "Essa postagem nao existe")
              res.redirect("/")
          }
      })
      .catch(err => {
          req.flash("error_msg", "Houve um erro interno")
          res.redirect("/")
      });
});

app.get("/404", (req, res) => {
    res.send("ERRO 404");
});

app.use('/admin', admin);
app.use("/usuarios", usuarios);

// OUTROS:
const PORT = 8081;
app.listen(PORT, () => {
    console.log("SERVIDOR RODANDO!");
});
