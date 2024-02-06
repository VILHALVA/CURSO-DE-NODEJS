const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const { Sequelize, DataTypes } = require('sequelize');

// CONEXÃO COM O BANCO DE DADOS:
const sequelize = new Sequelize('CADASTRONODEJS', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.sync()
  .then(() => {
    console.log('Modelo de Postagens sincronizado com sucesso.');

    app.listen(8081, function(){
      console.log("SERVIDOR CONECTADO COM SUCESSO!");
    });
  })
  .catch((err) => {
    console.error('Erro ao sincronizar modelo de Postagens:', err);
  });

// TAMPLATE ENGINE:
app.engine('handlebars', exphbs({ defaultLayout: 'main' })); 
app.set('view engine', 'handlebars');

// ROTAS:
app.get('/cad', function(req, res){
  res.render('FORMULARIO');
});
