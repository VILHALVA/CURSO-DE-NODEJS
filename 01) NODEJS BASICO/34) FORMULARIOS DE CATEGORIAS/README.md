# CRIANDO FORMULARIOS DE CATEGORIAS
Para criar um formulário de categorias em uma aplicação Express.js usando o Handlebars como mecanismo de visualização, siga estas etapas:

1. **Crie o Formulário Handlebars:**

   Primeiro, crie um arquivo Handlebars para o formulário de categorias. Por exemplo, você pode criar um arquivo chamado `categoria-form.handlebars` na pasta de views:

   ```handlebars
   <!-- views/categoria-form.handlebars -->
   <h1>Criar Categoria</h1>

   <form method="POST" action="/admin/categorias">
     <div class="form-group">
       <label for="nome">Nome da Categoria:</label>
       <input type="text" name="nome" id="nome" class="form-control">
     </div>
     <button type="submit" class="btn btn-primary">Salvar Categoria</button>
   </form>
   ```

   Este é um formulário simples com um campo de entrada para o nome da categoria e um botão "Salvar Categoria". O formulário envia uma solicitação POST para a rota `/admin/categorias` quando enviado.

2. **Crie a Rota para o Formulário:**

   Em seu arquivo de roteamento `admin.js`, crie uma rota para renderizar o formulário de categorias:

   ```javascript
   const express = require('express');
   const router = express.Router();

   // Rota para renderizar o formulário de categorias
   router.get('/categorias/nova', (req, res) => {
       res.render('categoria-form');
   });

   // Outras rotas do admin...
   
   module.exports = router;
   ```

   Esta rota renderiza o arquivo Handlebars `categoria-form.handlebars` quando o URL `/admin/categorias/nova` é acessado.

3. **Manipule a Submissão do Formulário:**

   Em seu arquivo `admin.js`, adicione uma rota para lidar com a submissão do formulário de categorias:

   ```javascript
   // Rota para lidar com a submissão do formulário de categorias
   router.post('/categorias', (req, res) => {
       const nomeCategoria = req.body.nome; // Obtenha o nome da categoria do corpo da solicitação
       
       // Execute a lógica para salvar a categoria no banco de dados (exemplo fictício)
       // Substitua isto pela lógica real de persistência de dados
       // ...

       // Redirecione para uma página de sucesso ou renderize uma página de confirmação
       res.redirect('/admin/categorias/nova');
   });
   ```

   Nesta rota, você pode acessar o nome da categoria enviado pelo formulário na propriedade `req.body.nome` e, em seguida, executar a lógica de salvamento no banco de dados. Depois, você pode redirecionar o usuário para uma página de sucesso ou renderizar uma página de confirmação.

4. **Adicione as Rotas do Admin à Aplicação Principal:**

   Em seu arquivo `app.js` (ou onde você configurou sua aplicação Express), adicione as rotas do admin à aplicação principal:

   ```javascript
   const adminRoutes = require('./router/admin');

   // ...

   // Use as rotas do admin
   app.use('/admin', adminRoutes);

   // ...
   ```

   Certifique-se de definir as rotas do admin com um prefixo, como `/admin`, para evitar conflitos com outras rotas da aplicação.

5. **Configuração do Módulo Body Parser:**

   Certifique-se de que você configurou o módulo `body-parser` corretamente em seu arquivo `app.js` para poder acessar os dados enviados pelo formulário:

   ```javascript
   const bodyParser = require('body-parser');

   // ...

   // Configurar o body-parser
   app.use(bodyParser.urlencoded({ extended: true }));
   app.use(bodyParser.json());

   // ...
   ```

   Isso permite que você analise os dados do corpo da solicitação POST.

Agora você tem um formulário de categorias funcional em sua aplicação Express.js. Quando um usuário acessar `/admin/categorias/nova`, ele verá o formulário e poderá criar novas categorias. Certifique-se de substituir a lógica fictícia de salvamento de categoria pela lógica real de persistência de dados, se necessário.