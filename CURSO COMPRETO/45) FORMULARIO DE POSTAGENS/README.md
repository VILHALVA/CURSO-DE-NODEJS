# FORMULARIO DE POSTAGENS
Para criar um formulário de postagens em um aplicativo Node.js usando Express.js e HTML, você pode seguir este exemplo básico. Primeiro, você precisa criar a rota e a view para o formulário de postagens e, em seguida, definir a lógica para processar os dados do formulário quando ele for enviado.

1. Crie a rota para exibir o formulário de postagens em seu arquivo de roteamento (por exemplo, `routes/posts.js`):

```javascript
const express = require('express');
const router = express.Router();

// Rota para exibir o formulário de criação de postagens
router.get('/new', (req, res) => {
  res.render('posts/new'); // Use o mecanismo de visualização que você configurou
});

// Rota para processar o envio do formulário de criação de postagens
router.post('/new', (req, res) => {
  // Aqui você irá lidar com a lógica para criar uma nova postagem
  // Use os dados do formulário contidos em req.body
  // Por exemplo, você pode criar uma nova postagem no banco de dados
  // e redirecionar o usuário para a página da postagem recém-criada
});

module.exports = router;
```

2. Crie a view para o formulário de postagens (por exemplo, `views/posts/new.handlebars`):

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nova Postagem</title>
</head>
<body>
  <h1>Criar Nova Postagem</h1>
  <form action="/posts/new" method="post">
    <label for="titulo">Título:</label>
    <input type="text" id="titulo" name="titulo" required><br>

    <label for="conteudo">Conteúdo:</label>
    <textarea id="conteudo" name="conteudo" rows="4" required></textarea><br>

    <button type="submit">Criar Postagem</button>
  </form>
</body>
</html>
```

Neste exemplo:

- Criamos duas rotas, uma para exibir o formulário de criação de postagens (`GET`) e outra para processar o envio do formulário (`POST`).

- No formulário HTML, configuramos os campos "Título" e "Conteúdo" usando elementos `<input>` e `<textarea>`. O atributo `name` desses elementos corresponde aos campos que você definiu em seu modelo de postagens.

- O atributo `action` do formulário especifica para onde os dados do formulário serão enviados quando o usuário o enviar. No exemplo, eles serão enviados de volta para a rota `'/posts/new'` para serem processados.

- Quando o formulário for enviado (`POST`), você deve escrever a lógica para processar os dados no servidor, criar uma nova postagem no banco de dados e redirecionar o usuário para a página da postagem recém-criada.

Certifique-se de ajustar o código para se adequar à estrutura e às necessidades do seu aplicativo, incluindo a configuração do mecanismo de visualização e a lógica de manipulação de postagens no servidor.
