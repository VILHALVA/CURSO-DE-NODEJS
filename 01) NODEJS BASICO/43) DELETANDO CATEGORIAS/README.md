# DELETANDO CATEGORIAS
Para implementar a funcionalidade de exclusão (deleção) de categorias em uma aplicação Express.js, você pode seguir os passos a seguir:

1. **Crie um Endpoint para Excluir Categoria**:

   Crie uma rota que permita aos usuários excluir uma categoria específica. Esta rota deve ser acessível por meio de uma solicitação HTTP DELETE.

   ```javascript
   const express = require('express');
   const router = express.Router();
   const Categoria = require('../models/categoria'); // Importe o modelo de categoria

   // Rota para excluir uma categoria
   router.delete('/categorias/:id', async (req, res) => {
     try {
       const categoria = await Categoria.findByIdAndRemove(req.params.id); // Encontre a categoria pelo ID e remova-a
       if (!categoria) {
         return res.status(404).json({ erro: 'Categoria não encontrada' });
       }
       res.json({ mensagem: 'Categoria excluída com sucesso' });
     } catch (error) {
       console.error('Erro ao excluir categoria:', error);
       res.status(500).json({ erro: 'Erro interno do servidor' });
     }
   });

   module.exports = router;
   ```

2. **Registre a Rota no Seu Aplicativo**:

   Certifique-se de registrar a nova rota em seu aplicativo principal, assim como mencionado anteriormente.

3. **Criar um Botão de Exclusão na Interface do Usuário**:

   Na página que lista as categorias ou em algum lugar onde você deseja permitir a exclusão, adicione um botão ou link que permita ao usuário iniciar o processo de exclusão.

   ```html
   <a href="/categorias/{{categoria._id}}" class="btn btn-danger" data-method="DELETE" data-confirm="Tem certeza que deseja excluir esta categoria?">Excluir</a>
   ```

   Este exemplo usa um atributo `data-method` com valor `DELETE` e um atributo `data-confirm` para confirmar a ação de exclusão. Você pode personalizar o HTML e os estilos conforme necessário.

4. **Use um Pacote de Middleware**:

   O exemplo acima usa o atributo `data-method` para indicar que a solicitação HTTP deve ser uma solicitação DELETE. Você precisará de um middleware para capturar essas solicitações e encaminhá-las para a rota DELETE correta. Você pode usar o pacote `method-override` para isso. Certifique-se de instalá-lo primeiro:

   ```
   npm install method-override
   ```

   Em seguida, configure-o em seu aplicativo:

   ```javascript
   const methodOverride = require('method-override');
   // ...
   app.use(methodOverride('_method'));
   ```

5. **Manipular a Solicitação de Exclusão no Controlador**:

   No controlador (o código que lida com as rotas), certifique-se de receber a solicitação de exclusão e remover a categoria correspondente no banco de dados.

6. **Redirecionar ou Retornar uma Resposta Adequada**:

   Após a exclusão da categoria, você pode optar por redirecionar o usuário de volta à lista de categorias ou exibir uma mensagem de sucesso. Isso depende das necessidades da sua aplicação.

Lembre-se de que você também deve adicionar validação de entrada e lidar com erros de forma adequada para tornar sua aplicação robusta e segura. Além disso, considere a autenticação e autorização para garantir que apenas usuários autorizados possam excluir categorias.
