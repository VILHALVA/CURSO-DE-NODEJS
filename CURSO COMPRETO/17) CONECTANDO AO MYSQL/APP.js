const Sequelize = require('sequelize');
const sequelize = new Sequelize('CADASTRONODEJS', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function() {
    console.log('CONECTADO COM SUCESSO!');
}).catch(function(erro) {
    console.log('ERRO AO SE CONECTAR: ' + erro);
});
