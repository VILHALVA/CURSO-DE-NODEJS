# COMO CRIAR FORMULÁRIO?
Para criar um formulário em uma aplicação Node.js com Express.js e Handlebars como mecanismo de visualização, você pode seguir os passos abaixo:

## Passo 1: Configure as Rotas no Express.js:
Primeiro, configure as rotas no seu aplicativo Express.js para lidar com o formulário. Você pode criar um arquivo de rotas separado, por exemplo, `routes.js`. Aqui está um exemplo de como configurar uma rota para exibir e processar um formulário:

```javascript
// routes.js

const express = require('express');
const router = express.Router();

// Rota para exibir o formulário
router.get('/formulario', (req, res) => {
  res.render('formulario'); // Renderiza o modelo Handlebars para o formulário
});

// Rota para processar os dados do formulário
router.post('/formulario', (req, res) => {
  const { nome, email } = req.body; // Obtém os dados do formulário

  // Faça algo com os dados do formulário (por exemplo, salve no banco de dados)
  // ...

  res.redirect('/sucesso'); // Redireciona para uma página de sucesso
});

module.exports = router;
```

## Passo 2: Crie um Modelo Handlebars para o Formulário:
Agora, crie um modelo Handlebars para o formulário. Por exemplo, crie um arquivo `formulario.handlebars` na sua pasta de visualizações (por padrão, a pasta `views`):

```handlebars
<!DOCTYPE html>
<html>
<head>
    <title>Formulário</title>
</head>
<body>
    <h1>Formulário de Contato</h1>
    
    <form method="POST" action="/formulario">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required>

        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" required>

        <button type="submit">Enviar</button>
    </form>
</body>
</html>
```

Este é um modelo HTML simples que cria um formulário com campos "Nome" e "E-mail". O formulário envia os dados para a rota `/formulario` usando o método POST.

## Passo 3: Configure o Express para Lidar com Corpos de Requisição:
Para que o Express possa acessar os dados enviados pelo formulário, você precisa configurar um middleware para lidar com os corpos das requisições. Você pode usar o `body-parser`, que é um middleware popular para essa finalidade:

```javascript
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser'); // Importe o body-parser

// Configuração do mecanismo de visualização e pasta de visualizações
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

// Configura o body-parser para lidar com os corpos das requisições
app.use(bodyParser.urlencoded({ extended: false }));

// Configuração das rotas (importadas de routes.js)
const routes = require('./routes');
app.use('/', routes);

// Inicia o servidor
const port = 8081;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
```

## Passo 4: Inicie o Aplicativo:
Agora, você pode iniciar o aplicativo Node.js com `node seu_arquivo_js`, onde `seu_arquivo_js` é o nome do arquivo onde você configurou o Express e as rotas.

Quando você acessar `/formulario` em seu navegador, verá o formulário que você criou. Quando enviar o formulário, ele será processado pela rota `/formulario` que você configurou no Passo 1.

Lembre-se de que este é um exemplo simples. Você pode adicionar validações, manipulação de dados, armazenamento em banco de dados e outras funcionalidades conforme necessário para o seu projeto.