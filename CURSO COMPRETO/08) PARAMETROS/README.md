# PARÂMETROS
Em Express.js, os parâmetros são valores que podem ser passados em uma solicitação HTTP, geralmente na URL ou no corpo da solicitação. Eles são usados para transmitir informações do cliente para o servidor, permitindo que você personalize o comportamento da rota com base nesses valores. Existem dois tipos principais de parâmetros em Express: parâmetros de rota (route parameters) e parâmetros de consulta (query parameters).

## Parâmetros de Rota (Route Parameters):
Os parâmetros de rota são valores que fazem parte da própria URL da rota. Eles são definidos na rota usando colchetes `:` e um nome. Por exemplo:

```javascript
app.get('/usuario/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Você está visualizando o perfil do usuário com ID ${userId}`);
});
```

Neste exemplo, `:id` é um parâmetro de rota que pode assumir qualquer valor na URL. Quando alguém acessa uma URL como `/usuario/123`, o valor `123` é capturado no `req.params.id`.

## Parâmetros de Consulta (Query Parameters):
Os parâmetros de consulta são valores passados como parte da URL após o caractere `?`. Eles são usados para fornecer informações adicionais em uma solicitação. Por exemplo:

```javascript
app.get('/buscar', (req, res) => {
  const termoDeBusca = req.query.termo;
  res.send(`Você está buscando por: ${termoDeBusca}`);
});
```

Neste exemplo, `termo` é um parâmetro de consulta que pode ser adicionado à URL, como em `/buscar?termo=nodejs`. O valor `nodejs` é capturado no `req.query.termo`.

## Extraindo Parâmetros:
Para extrair parâmetros de rota, você pode usar `req.params.nomeDoParametro`, onde `nomeDoParametro` é o nome que você definiu na rota. Para extrair parâmetros de consulta, você pode usar `req.query.nomeDoParametro`, onde `nomeDoParametro` é o nome do parâmetro de consulta.

## Uso em Rotas:
Os parâmetros podem ser usados em rotas para personalizar o comportamento da rota com base nos valores passados na solicitação. Eles são úteis para criar rotas dinâmicas, como exibir informações específicas de um usuário com base no seu ID ou executar pesquisas com base em termos de busca.

## Exemplo de Uso em Rotas:
Aqui está um exemplo de uso de parâmetros de rota e consulta em uma aplicação Express:

```javascript
const express = require('express');
const app = express();

app.get('/usuario/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Você está visualizando o perfil do usuário com ID ${userId}`);
});

app.get('/buscar', (req, res) => {
  const termoDeBusca = req.query.termo;
  res.send(`Você está buscando por: ${termoDeBusca}`);
});

app.listen(3000, () => {
  console.log('Servidor Express rodando na porta 3000');
});
```

Neste exemplo, temos duas rotas: uma que utiliza um parâmetro de rota (`/usuario/:id`) para exibir o perfil de um usuário com base no ID e outra que utiliza um parâmetro de consulta (`/buscar`) para executar uma pesquisa. Os valores dos parâmetros são acessados por meio do objeto `req` e podem ser usados para personalizar a resposta da rota.