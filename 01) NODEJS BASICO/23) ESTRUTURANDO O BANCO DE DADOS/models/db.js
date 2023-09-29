// CONEXÃO COM O BANCO DE DADOS:
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postapp', 'root', 'root', {
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

module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize
}