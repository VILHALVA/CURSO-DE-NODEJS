# CRIANDO HOME PAGE
Para criar uma página inicial (home page) em um aplicativo Node.js usando o Express.js, você precisa seguir algumas etapas simples:

1. **Crie uma Rota para a Página Inicial**: No seu arquivo de rotas (por exemplo, `routes/index.js`), crie uma rota que corresponda à página inicial. Geralmente, a rota padrão é "/", que representa a raiz do seu site. Aqui está um exemplo de rota:

```javascript
const express = require('express');
const router = express.Router();

// Rota para a página inicial
router.get('/', (req, res) => {
  res.render('index'); // Renderize a página inicial usando seu mecanismo de visualização
});

module.exports = router;
```

2. **Crie a Página Inicial (View)**: Crie uma visualização HTML para a página inicial. Você pode usar qualquer mecanismo de visualização que preferir (como Handlebars, EJS, Pug, etc.). Certifique-se de que a visualização está localizada na pasta correta de acordo com a configuração do seu aplicativo. Por exemplo, se você estiver usando Handlebars, crie um arquivo chamado `index.handlebars` na pasta de visualizações.

```html
<!-- views/index.handlebars -->
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Página Inicial</title>
</head>
<body>
    <h1>Bem-vindo à Minha Página Inicial</h1>
    <p>Esta é a página inicial do meu aplicativo Node.js.</p>
</body>
</html>
```

3. **Configure a Rota no Aplicativo Principal**: No seu aplicativo principal (`app.js`), certifique-se de que o roteador da página inicial esteja sendo usado e configurado corretamente. Você deve usar `app.use('/', indexRouter)` ou algo semelhante para definir a rota principal.

```javascript
const express = require('express');
const app = express();
const indexRouter = require('./routes/index');

// ... Outras configurações do aplicativo ...

// Use o roteador da página inicial
app.use('/', indexRouter);

// ... Outros middlewares e configurações ...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
```

Agora, quando você acessar a raiz do seu aplicativo (por exemplo, `http://localhost:3000/`), a página inicial que você criou será exibida.

Certifique-se de adaptar o código às necessidades específicas do seu aplicativo e escolher o mecanismo de visualização que melhor atenda aos seus requisitos.