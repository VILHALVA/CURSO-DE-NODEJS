# CADASTRANDO CATEGORIAS NO BANCO DE DADOS
Para cadastrar categorias no banco de dados MongoDB usando o Mongoose em uma aplicação Node.js, você pode criar um formulário HTML em uma rota específica e, em seguida, lidar com o envio do formulário no servidor para salvar as categorias no banco de dados. Aqui está um exemplo de como fazer isso:

1. **Crie um Formulário HTML para Categorias:**

   Crie um formulário HTML em uma de suas rotas. Por exemplo, você pode criar uma rota `/admin/categorias/nova` que exiba o formulário de criação de categorias.

   ```html
   <!-- views/admin/novaCategoria.handlebars -->
   <!DOCTYPE html>
   <html lang="pt-br">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Nova Categoria</title>
   </head>
   <body>
       <h1>Nova Categoria</h1>
       <form action="/admin/categorias" method="POST">
           <label for="nome">Nome da Categoria:</label>
           <input type="text" id="nome" name="nome" required>
           <br>
           <label for="descricao">Descrição:</label>
           <textarea id="descricao" name="descricao"></textarea>
           <br>
           <button type="submit">Criar Categoria</button>
       </form>
   </body>
   </html>
   ```

2. **Lide com o Envio do Formulário no Servidor:**

   No seu servidor Node.js, configure uma rota para lidar com o envio do formulário e salvar a nova categoria no banco de dados.

   ```javascript
   // Importe o modelo de Categoria
   const Categoria = require('../models/Categoria');

   // Rota para exibir o formulário de criação de categoria
   app.get('/admin/categorias/nova', (req, res) => {
       res.render('admin/novaCategoria');
   });

   // Rota para processar o envio do formulário e criar a categoria
   app.post('/admin/categorias', async (req, res) => {
       try {
           // Crie uma nova instância do modelo de Categoria com base nos dados do formulário
           const novaCategoria = new Categoria({
               nome: req.body.nome,
               descricao: req.body.descricao,
           });

           // Salve a nova categoria no banco de dados
           await novaCategoria.save();

           // Redirecione para alguma página de sucesso ou exiba uma mensagem
           res.redirect('/admin/categorias');
       } catch (error) {
           console.error('Erro ao criar categoria:', error);
           res.status(500).send('Erro ao criar categoria.');
       }
   });
   ```

3. **Defina o Modelo de Categoria:**

   Certifique-se de que você tenha definido o modelo de categoria conforme mencionado nas respostas anteriores.

4. **Renderize a Página de Sucesso ou Manipule Erros:**

   Você pode redirecionar o usuário para uma página de sucesso após a criação da categoria ou exibir mensagens de erro conforme necessário.

5. **Lide com Erros de Validação:**

   Adicione validações ao seu modelo de categoria, se necessário, para garantir que os dados inseridos estejam corretos. Você pode usar recursos do Mongoose, como `required`, `minlength`, `maxlength`, entre outros, para validar os campos.

Com essas etapas, você terá um formulário que permite aos usuários cadastrar categorias no banco de dados MongoDB usando o Mongoose em sua aplicação Node.js. Certifique-se de adaptar o código acima ao seu projeto e aos requisitos específicos.