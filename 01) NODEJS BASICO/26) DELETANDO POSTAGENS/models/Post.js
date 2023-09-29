const { Sequelize, DataTypes } = require('sequelize');
const db = require('./db');

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: DataTypes.STRING
    },
    conteudo: {
        type: DataTypes.TEXT
    }
});

module.exports = Post;
