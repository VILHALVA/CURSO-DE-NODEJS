const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('CADASTRONODEJS', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

const Postagens = sequelize.define('POSTAGENS', {
  titulo: {
    type: DataTypes.STRING
  },
  conteudo: DataTypes.TEXT
});

Postagens.create({
    titulo: "UM TITULO QUALQUER",
    conteudo: "fwfbibibgibgerbgibgibgebgibgibgiebgiebge"
});

const Usuario = sequelize.define('USUARIOS', {
    nome: {
      type: DataTypes.STRING
    },
    sobrenome: {
        type: DataTypes.STRING
    },
    idade: {
        type: DataTypes.INTEGER
    },
    email: {
    type: DataTypes.STRING
    }
  });

Postagens.create({
    nome: "SAUMUEL",
    sobrenome: "VILHALVA",
    idade: 27,
    email: "email@email.com"
});

sequelize.sync() 
  .then(() => {
    console.log('Modelo de Postagens sincronizado com sucesso.');
  })
  .catch((err) => {
    console.error('Erro ao sincronizar modelo de Postagens:', err);
});
