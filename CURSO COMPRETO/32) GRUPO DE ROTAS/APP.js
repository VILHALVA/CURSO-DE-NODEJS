// CARREGANDO MÓDULOS
const express = require('express');
const handlebars = require('express-handlebars'); 
const bodyParser = require('body-parser');
const app = express();
const admin = require('./router/admin');

// CONFIGURAÇÕES:
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine('handlebars', handlebars({ defaultLayout: 'main' })); 
app.set('view engine', 'handlebars');

// ROTAS:
app.use('/admin', admin);
// OUTROS:
const PORT = 8081;
app.listen(PORT, () => {
    console.log("SERVIDOR RODANDO!");
});
