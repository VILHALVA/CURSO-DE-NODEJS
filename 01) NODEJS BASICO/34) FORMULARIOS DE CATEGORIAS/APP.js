// CARREGANDO MÓDULOS
const express = require('express');
const handlebars = require('express-handlebars'); 
const bodyParser = require('body-parser');
const app = express();
const admin = require('./router/admin');
const path = require('path');

// CONFIGURAÇÕES:
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const handlebars = require('express-handlebars');
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname + "/public")))

// ROTAS:
app.use('/admin', admin);
// OUTROS:
const PORT = 8081;
app.listen(PORT, () => {
    console.log("SERVIDOR RODANDO!");
});
