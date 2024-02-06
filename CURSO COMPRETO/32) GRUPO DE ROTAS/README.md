# GRUPO DE ROTAS
No Express.js, você pode criar grupos de rotas para organizar suas rotas de maneira mais eficiente e manter seu código mais organizado. Para criar um grupo de rotas, você pode usar o método `express.Router()` para criar um objeto de roteador e, em seguida, adicionar rotas a esse objeto de roteador. Em seguida, você pode montar o roteador no aplicativo principal usando `app.use()`.

Aqui está um exemplo de como criar e usar um grupo de rotas no Express.js:

```javascript
const express = require('express');
const app = express();

// Criar um objeto de roteador
const router = express.Router();

// Definir uma rota no roteador
router.get('/rota1', (req, res) => {
  res.send('Rota 1 do grupo de rotas');
});

// Definir outra rota no roteador
router.get('/rota2', (req, res) => {
  res.send('Rota 2 do grupo de rotas');
});

// Montar o roteador no aplicativo principal
app.use('/grupo', router);

// Iniciar o servidor
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
```

Neste exemplo:

1. Criamos um objeto de roteador usando `express.Router()`.
2. Definimos rotas no objeto de roteador usando os métodos `router.get()` e `router.post()`.
3. Montamos o roteador no aplicativo principal usando `app.use()`. Especificamos o prefixo `'/grupo'`, então todas as rotas definidas no roteador serão acessíveis com `/grupo/rota1` e `/grupo/rota2`.

Isso permite que você mantenha seu código organizado e agrupe rotas relacionadas em um único objeto de roteador. Você pode criar vários grupos de rotas para diferentes partes do seu aplicativo, facilitando a manutenção e escalabilidade do código.