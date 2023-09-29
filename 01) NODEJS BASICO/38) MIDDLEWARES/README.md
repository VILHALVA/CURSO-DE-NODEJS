# O QUE SÃO MIDDLEWARES?
Middleware é um conceito fundamental no desenvolvimento de aplicativos web e se refere a funções ou conjuntos de funções que são executados antes que uma requisição HTTP alcance o manipulador da rota principal (endpoint) em um servidor. Os middlewares são usados para realizar tarefas como autenticação, autorização, validação de dados, registro de logs e muito mais. Eles são uma parte essencial de frameworks e bibliotecas web, como o Express.js no Node.js.

Aqui estão alguns pontos-chave sobre middlewares:

1. **Execução em Sequência:** Os middlewares são executados em ordem, da esquerda para a direita, antes que a requisição alcance o manipulador de rota principal. Isso permite que você execute tarefas em série, como autenticar um usuário antes de permitir o acesso a uma rota protegida.

2. **Modificação da Requisição e da Resposta:** Os middlewares podem ler, modificar e até mesmo interromper uma requisição HTTP antes que ela atinja o manipulador de rota. Eles também podem modificar a resposta antes que ela seja enviada de volta ao cliente.

3. **Uso de Funções:** Em JavaScript (e em muitas outras linguagens), middlewares são funções. Eles têm acesso a objetos de requisição (`req`), resposta (`res`), e a próxima função de middleware no fluxo (`next`). Normalmente, a função `next()` é chamada para passar a requisição para o próximo middleware na sequência.

Aqui está um exemplo simples de middleware no Express.js:

```javascript
const express = require('express');
const app = express();

// Middleware personalizado para registrar informações sobre cada requisição.
app.use((req, res, next) => {
  console.log(`Requisição feita para: ${req.url}`);
  next(); // Chama a próxima função de middleware.
});

// Rota principal.
app.get('/', (req, res) => {
  res.send('Página principal');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
```

Neste exemplo, o middleware registra a URL de cada requisição antes de passar a requisição para o manipulador de rota principal.

Os middlewares são flexíveis e podem ser reutilizados em várias partes do aplicativo, tornando o código mais organizado e facilitando a implementação de funcionalidades comuns, como autenticação, controle de acesso e manipulação de erros. Eles desempenham um papel fundamental na construção de aplicativos web escaláveis e modularizados.