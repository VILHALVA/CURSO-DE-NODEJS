# EDITANDO CATEGORIAS
Para permitir a edição de categorias em uma aplicação Express.js, você precisará criar uma rota e um formulário que permita aos usuários enviar informações para atualizar a categoria existente. Aqui estão os passos gerais para editar uma categoria:

1. **Crie um Endpoint para Editar Categoria**:

   Primeiro, crie uma rota que corresponda à edição de categorias. Esta rota deve ser acessível através de uma solicitação HTTP POST (ou PUT) e deve receber os dados atualizados da categoria.

   ```javascript
   const express = require('express');
   const router = express.Router();
   const Categoria = require('../models/categoria'); // Importe o modelo de categoria

   // Rota para exibir o formulário de edição de categoria
   router.get('/categorias/:id/editar', async (req, res) => {
     try {
       const categoria = await Categoria.findById(req.params.id); // Encontre a categoria pelo ID
       res.render('categorias/editar', { categoria }); // Renderize a página de edição com os dados da categoria
     } catch (error) {
       console.error('Erro ao carregar categoria para edição:', error);
       res.status(500).json({ erro: 'Erro interno do servidor' });
     }
   });

   // Rota para processar a edição da categoria
   router.put('/categorias/:id', async (req, res) => {
     try {
       const { nome, descricao } = req.body;
       const categoria = await Categoria.findByIdAndUpdate(req.params.id, { nome, descricao }, { new: true }); // Atualize a categoria pelo ID
       res.json(categoria); // Retorne a categoria atualizada em formato JSON
     } catch (error) {
       console.error('Erro ao editar categoria:', error);
       res.status(500).json({ erro: 'Erro interno do servidor' });
     }
   });

   module.exports = router;
   ```

2. **Crie uma Página de Formulário para Edição**:

   Crie uma página de formulário em HTML que permita aos usuários editar as informações da categoria. Esta página deve enviar uma solicitação HTTP POST (ou PUT) para a rota de edição que você criou na etapa anterior.

   Por exemplo, você pode criar uma página chamada `editar.handlebars`:

   ```html
   <!DOCTYPE html>
   <html lang="pt-br">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Editar Categoria</title>
   </head>
   <body>
       <h1>Editar Categoria</h1>
       <form action="/categorias/{{categoria._id}}" method="POST"> <!-- Substitua pelo caminho da rota de edição -->
           <label for="nome">Nome:</label>
           <input type="text" id="nome" name="nome" value="{{categoria.nome}}" required>

           <label for="descricao">Descrição:</label>
           <textarea id="descricao" name="descricao">{{categoria.descricao}}</textarea>

           <button type="submit">Salvar</button>
       </form>
   </body>
   </html>
   ```

3. **Registre as Rotas no Seu Aplicativo**:

   Certifique-se de registrar as novas rotas em seu aplicativo principal, assim como mencionado anteriormente.

4. **Lide com a Solicitação de Edição no Controlador**:

   No controlador (o código que lida com as rotas), certifique-se de receber os dados enviados pelo formulário e atualizar a categoria correspondente no banco de dados. Use o método `findByIdAndUpdate` ou similar para realizar a atualização.

5. **Redirecione ou Retorne uma Resposta Adequada**:

   Após a edição da categoria, você pode optar por redirecionar o usuário de volta à lista de categorias ou exibir uma mensagem de sucesso. Isso depende das necessidades da sua aplicação.

Isso é um exemplo básico de como editar categorias em uma aplicação Express.js. Lembre-se de que você também deve adicionar validação de entrada e lidar com erros de forma adequada para tornar sua aplicação robusta e segura.