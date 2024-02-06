# PEGANDO DADOS DO FORMULÁRIO
Para pegar dados de um formulário HTML usando o Node.js e o Express, você pode usar o módulo `body-parser` para analisar os dados do corpo da solicitação. Aqui está um exemplo passo a passo de como fazer isso:

1. Certifique-se de que você já instalou o módulo `body-parser`. Se ainda não o fez, você pode instalá-lo usando o npm:

   ```bash
   npm install body-parser
   ```

2. Configure o `body-parser` em seu aplicativo Express:

   ```javascript
   const express = require('express');
   const bodyParser = require('body-parser');
   const app = express();

   // Configurar o body-parser para analisar dados JSON e formulários
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({ extended: true }));

   // Resto do seu código Express
   ```

3. Crie um formulário HTML em um arquivo separado, como "formulario.html", com campos de entrada que tenham atributos "name" definidos:

   ```html
   <!-- formulario.html -->
   <form action="/processar-formulario" method="post">
     <label for="nome">Nome:</label>
     <input type="text" name="nome" id="nome">

     <label for="email">Email:</label>
     <input type="email" name="email" id="email">

     <button type="submit">Enviar</button>
   </form>
   ```

4. Defina uma rota no Express para lidar com a submissão do formulário e acessar os dados do formulário:

   ```javascript
   app.post('/processar-formulario', (req, res) => {
     const nome = req.body.nome;
     const email = req.body.email;

     // Faça o que quiser com os dados, como salvá-los no banco de dados ou renderizá-los em uma página
     res.send(`Nome: ${nome}, Email: ${email}`);
   });
   ```

5. Inicie o servidor Express e acesse o formulário em seu navegador:

   ```javascript
   app.listen(8081, () => {
     console.log('Servidor está rodando na porta 8081');
   });
   ```

Ao preencher e enviar o formulário no navegador, os dados serão enviados para a rota "/processar-formulario" como uma solicitação POST. O `body-parser` analisará os dados do corpo da solicitação e você poderá acessá-los usando `req.body` como mostrado no exemplo.

Certifique-se de que os atributos "name" dos campos do formulário correspondam aos nomes que você está usando em `req.body` para pegar os dados. Isso permitirá que o `body-parser` associe os campos do formulário aos valores corretos em `req.body`.