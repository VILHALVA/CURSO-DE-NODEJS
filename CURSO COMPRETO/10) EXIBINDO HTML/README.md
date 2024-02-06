# EXIBINDO HTML
## EXIBINDO INTERNAMENTE:
Para exibir conteúdo HTML em uma aplicação Express.js, você pode usar o método `res.send()` para enviar uma resposta HTML para o navegador do cliente. Aqui está um exemplo de como você pode fazer isso:

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Exemplo de HTML em Express</title>
    </head>
    <body>
      <h1>Olá, Mundo!</h1>
      <p>Este é um exemplo de página HTML em Express.js.</p>
    </body>
    </html>
  `;

  res.send(htmlContent);
});

app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}`);
});
```

Neste exemplo:

1. Importamos o módulo Express.js e inicializamos o aplicativo.
2. Definimos uma rota para a URL raiz ("/") usando `app.get()`.
3. Dentro da função de callback, criamos uma string `htmlContent` que contém o código HTML que queremos enviar como resposta.
4. Usamos `res.send()` para enviar a string `htmlContent` como resposta quando alguém acessa a rota raiz.

Ao acessar a URL raiz (`http://localhost:3000` neste caso), o navegador receberá o código HTML definido em `htmlContent` e o exibirá como uma página da web.

Você pode personalizar o conteúdo HTML conforme necessário para sua aplicação, incluindo estilos CSS, scripts JavaScript e qualquer outra coisa que desejar. O Express.js é flexível e permite que você crie páginas HTML dinâmicas e interativas da mesma maneira.

## EXIBINDO EXTERNAMENTE:
Este é um exemplo simples de como exibir um arquivo HTML usando o framework Express.js em Node.js. Demonstraremos como usar `res.sendFile()` para enviar um arquivo HTML como resposta a uma solicitação HTTP.

### Pré-requisitos
- Node.js instalado no seu computador.

### Passos
1. Crie uma pasta para o seu projeto e navegue até ela no terminal.

2. Inicie um novo projeto Node.js e instale o Express:

   ```bash
   npm init -y
   npm install express
   ```

3. Crie um arquivo JavaScript para o seu aplicativo Express, por exemplo, `app.js`.

4. Crie um arquivo HTML chamado `APP.html` na mesma pasta do seu arquivo JavaScript (`app.js`).

5. No arquivo `app.js`, configure seu aplicativo Express da seguinte maneira:

   ```javascript
   const express = require('express');
   const app = express();
   const port = 8081; // Escolha a porta que desejar

   app.get('/', function(req, res) {
       res.sendFile("APP.html", { root: __dirname });
   });

   app.listen(port, () => {
       console.log(`Servidor Express rodando na porta ${port}`);
   });
   ```

   Certifique-se de que o arquivo `APP.html` esteja no mesmo diretório que o arquivo JavaScript (`app.js`).

6. Inicie o servidor Express:

   ```bash
   node app.js
   ```

7. Abra seu navegador e acesse `http://localhost:8081` (ou a porta que você escolheu).

Você verá o conteúdo do arquivo `APP.html` sendo exibido no navegador.

### Explicação
No exemplo acima, usamos a função `res.sendFile()` para enviar o arquivo `APP.html` como resposta quando alguém acessa a rota raiz ("/"). A diferença importante a ser observada aqui é o uso de `{ root: __dirname }` como opção ao chamar `res.sendFile()`. Isso garante que o Node.js procure o arquivo no diretório atual (`__dirname`), permitindo o uso de um caminho relativo para o arquivo HTML.

Certifique-se de que o arquivo HTML que você deseja exibir esteja no mesmo diretório que seu arquivo JavaScript ou ajuste o caminho de acordo com a localização real do arquivo HTML.

Isso é tudo! Agora você sabe como exibir um arquivo HTML usando o Express.js em Node.js.

Este README explica o processo de exibição de um arquivo HTML com o Express.js e enfatiza a importância de usar o `{ root: __dirname }` ao chamar `res.sendFile()` para garantir que o caminho relativo funcione corretamente. Certifique-se de adaptar os nomes dos arquivos e portas conforme necessário para o seu projeto específico.