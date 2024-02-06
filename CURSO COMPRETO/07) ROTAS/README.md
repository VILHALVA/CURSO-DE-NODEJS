# ROTAS DO EXPRESS
Em uma aplicação web construída com o framework Express.js, as rotas desempenham um papel fundamental. As rotas determinam como as solicitações HTTP feitas ao servidor são manipuladas e direcionadas para funções ou controladores específicos, que gerenciam a lógica de resposta. Vamos entender melhor o conceito de rotas em Express:

## Definindo Rotas Básicas:
Em uma aplicação Express, você define rotas associando uma URL a uma função de callback específica. Aqui está um exemplo de definição de rota básica para a raiz ("/") do aplicativo:

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Esta é a página inicial');
});
```

Neste exemplo, usamos `app.get()` para definir uma rota para a URL raiz ("/"). Quando alguém acessa a raiz do aplicativo, a função de callback é executada e envia a resposta "Esta é a página inicial" de volta para o cliente.

## Parâmetros de Rota:
Express permite que você defina rotas com parâmetros dinâmicos, o que torna sua aplicação mais flexível. Você pode usar dois tipos de parâmetros de rota: parâmetros de rota e parâmetros de consulta. Aqui está um exemplo:

```javascript
app.get('/produto/:id', (req, res) => {
  const produtoId = req.params.id;
  res.send(`Você está visualizando o produto com ID ${produtoId}`);
});
```

Neste exemplo, definimos uma rota `/produto/:id`, onde `:id` é um parâmetro de rota. Quando alguém acessa uma URL como `/produto/123`, o valor `123` é capturado no parâmetro `req.params.id`.

## Middleware de Rota:
Você pode adicionar middleware a uma rota específica para executar ações antes ou depois do tratamento da solicitação. Por exemplo:

```javascript
function autenticar(req, res, next) {
  // Lógica de autenticação aqui
  if (usuarioAutenticado) {
    next(); // Chama a próxima função de middleware ou manipulador de rota
  } else {
    res.status(401).send('Não autorizado');
  }
}

app.get('/página-secreta', autenticar, (req, res) => {
  res.send('Você está na página secreta');
});
```

Neste exemplo, a função `autenticar` é um middleware que verifica se o usuário está autenticado. Se o usuário estiver autenticado, ele chama `next()` para continuar o processamento da rota. Se não, ele envia uma resposta de status 401 (Não Autorizado).

## Manipulando Métodos HTTP:
Em Express, você pode definir rotas para diferentes métodos HTTP, como GET, POST, PUT e DELETE. Por exemplo:

```javascript
app.get('/recurso', (req, res) => {
  // Manipular solicitações GET
});

app.post('/recurso', (req, res) => {
  // Manipular solicitações POST
});

app.put('/recurso', (req, res) => {
  // Manipular solicitações PUT
});

app.delete('/recurso', (req, res) => {
  // Manipular solicitações DELETE
});
```

Cada rota pode ser configurada para responder a um método HTTP específico.

## Express Router:
À medida que sua aplicação cresce, você pode dividir as rotas em módulos separados para manter seu código organizado. O Express Router é uma funcionalidade que permite criar grupos de rotas em arquivos separados e, em seguida, montá-los em sua aplicação principal. Isso é útil para separar a lógica de rota em partes gerenciáveis.

```javascript
// roteador.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Esta é a página inicial');
});

module.exports = router;
```

```javascript
// app.js
const express = require('express');
const app = express();
const roteador = require('./roteador');

app.use('/', roteador);

// Resto da configuração...
```

Neste exemplo, definimos rotas em um arquivo `roteador.js` e, em seguida, montamos essas rotas na aplicação principal usando `app.use()`.

As rotas são um conceito fundamental em Express e permitem que você defina como as solicitações HTTP são tratadas em seu aplicativo. Você pode criar rotas simples ou complexas, usar parâmetros dinâmicos, adicionar middleware e até mesmo organizar suas rotas em módulos separados para manter seu código limpo e organizado. É uma parte essencial no desenvolvimento de aplicativos web com Node.js e Express.