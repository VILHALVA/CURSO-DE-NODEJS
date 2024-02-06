const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postapp', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = { sequelize }; 
