# LISTAGEM DE CATEGORIAS
Para listar categorias em uma página usando Express.js e Handlebars, você pode seguir os passos a seguir:

1. **Definir uma Rota no Express.js**:

   Em seu arquivo de roteamento (por exemplo, `admin.js`), defina uma rota para a página de listagem de categorias. Por exemplo:

   ```javascript
   // admin.js
   const express = require('express');
   const router = express.Router();

   // Importe seu modelo de categoria aqui
   const Categoria = require('../models/categoria');

   // Rota para listar categorias
   router.get('/categorias', async (req, res) => {
       try {
           const categorias = await Categoria.find(); // Consulta o banco de dados para obter todas as categorias
           res.render('admin/categorias', { categorias }); // Renderiza a página de categorias com os dados
       } catch (err) {
           console.error('Erro ao listar categorias:', err);
           res.status(500).send('Erro ao listar categorias');
       }
   });

   module.exports = router;
   ```

2. **Criar a Página Handlebars**:

   Em seu arquivo Handlebars (por exemplo, `categorias.handlebars`), você pode listar as categorias usando a estrutura `{{#each}}` para iterar sobre as categorias recuperadas do banco de dados:

   ```handlebars
   <!-- views/admin/categorias.handlebars -->
   <h2>LISTA DE CATEGORIAS</h2>
   <hr>
   <a href="/admin/categorias/add">
       <button class="btn btn-success">NOVA CATEGORIA</button>
   </a>

   <table class="table table-bordered table-striped">
       <thead>
           <tr>
               <th>Nome</th>
               <th>Slug</th>
               <th>Data de Criação</th>
               <th>Ações</th>
           </tr>
       </thead>
       <tbody>
           {{#each categorias}}
           <tr>
               <td>{{nome}}</td>
               <td>{{slug}}</td>
               <td>{{createdAt}}</td>
               <td>
                   <a href="/admin/categorias/edit/{{_id}}" class="btn btn-primary">Editar</a>
                   <a href="/admin/categorias/delete/{{_id}}" class="btn btn-danger">Excluir</a>
               </td>
           </tr>
           {{/each}}
       </tbody>
   </table>
   ```

3. **Configurar a Rota no Arquivo Principal (app.js)**:

   Em seu arquivo principal do Express (por exemplo, `app.js`), configure o uso da rota que você definiu em `admin.js`:

   ```javascript
   // app.js
   const express = require('express');
   const exphbs = require('express-handlebars');
   const bodyParser = require('body-parser');
   const mongoose = require('mongoose');

   // ... Configuração do MongoDB e outros middlewares ...

   // Configure o Handlebars como mecanismo de visualização
   app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
   app.set('view engine', 'handlebars');

   // Configurar o uso do bodyParser e outros middlewares

   // Configurar a rota admin
   const adminRouter = require('./routes/admin');
   app.use('/admin', adminRouter);

   // ... Outras configurações e middleware ...

   // Iniciar o servidor
   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => {
       console.log(`Servidor rodando na porta ${PORT}`);
   });
   ```

Agora, quando você acessar a rota `/admin/categorias`, o Express.js renderizará a página Handlebars `categorias.handlebars` e listará as categorias obtidas do banco de dados.

Certifique-se de ajustar as rotas, os modelos de dados e os caminhos dos arquivos Handlebars de acordo com a estrutura do seu projeto. Além disso, você pode estilizar a página de listagem de categorias e adicionar mais funcionalidades conforme necessário.