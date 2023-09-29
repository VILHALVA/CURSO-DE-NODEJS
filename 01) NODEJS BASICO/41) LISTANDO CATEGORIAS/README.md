# LISTANDO CATEGORIAS
Para listar categorias em uma aplicação Express.js, você precisará criar um endpoint que consulte o banco de dados (onde as categorias estão armazenadas) e retorne essas categorias em resposta a uma solicitação HTTP.

Aqui estão os passos gerais para listar categorias:

1. **Crie um modelo de dados para Categorias**:

   Antes de listar categorias, certifique-se de que você tenha um modelo de dados apropriado para categorias. Você já mencionou que você tem um modelo chamado `Categoria`. Certifique-se de que este modelo tenha a estrutura adequada para armazenar as categorias.

   Exemplo de um modelo de categoria simples usando Mongoose (assumindo que você está usando o Mongoose como seu ODM):

   ```javascript
   const mongoose = require('mongoose');

   const categoriaSchema = new mongoose.Schema({
     nome: String,
     descricao: String,
   });

   module.exports = mongoose.model('Categoria', categoriaSchema);
   ```

2. **Crie um Endpoint para Listar Categorias**:

   Agora, você pode criar um endpoint em sua aplicação Express.js para listar as categorias. Por exemplo:

   ```javascript
   const express = require('express');
   const router = express.Router();
   const Categoria = require('../models/categoria'); // Importe o modelo de categoria

   // Rota para listar todas as categorias
   router.get('/categorias', async (req, res) => {
     try {
       const categorias = await Categoria.find(); // Consulta todas as categorias no banco de dados
       res.json(categorias); // Retorna as categorias em formato JSON
     } catch (error) {
       console.error('Erro ao listar categorias:', error);
       res.status(500).json({ erro: 'Erro interno do servidor' });
     }
   });

   module.exports = router;
   ```

3. **Registre as Rotas no Seu Aplicativo**:

   Certifique-se de registrar as rotas em seu aplicativo principal. Você pode fazer isso em seu arquivo `app.js` ou onde você define seu aplicativo Express.

   ```javascript
   const express = require('express');
   const app = express();
   const categoriasRouter = require('./routes/categorias'); // Importe o arquivo de rota de categorias

   // ...

   app.use('/api', categoriasRouter); // Use o arquivo de rota para categorias

   // ...

   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => {
     console.log(`Servidor rodando na porta ${PORT}`);
   });
   ```

4. **Acesse as Categorias pelo Endpoint**:

   Agora, quando você acessar `/api/categorias` em seu navegador ou por meio de uma solicitação HTTP, a rota `/categorias` será chamada, consultará as categorias no banco de dados e retornará uma resposta JSON com as categorias listadas.

Este é um exemplo básico de como listar categorias em uma aplicação Express.js. Certifique-se de adaptar esses passos ao seu aplicativo e às suas necessidades específicas, como autenticação e autorização, paginacão e ordenação, se necessário.