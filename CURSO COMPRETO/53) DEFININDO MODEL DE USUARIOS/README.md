# DEFININDO MODEL DE USUARIOS
Para definir um modelo de usuário (ou modelo de dados de usuário) em um aplicativo Express.js com o Mongoose (um ODM - Object Data Modeling para MongoDB), siga estas etapas:

1. **Instale o Mongoose**:

   Certifique-se de que você já instalou o Mongoose em seu projeto. Se ainda não o fez, você pode instalá-lo usando o npm (Node Package Manager) com o seguinte comando:

   ```bash
   npm install mongoose
   ```

2. **Crie um Arquivo de Modelo**:

   Em sua estrutura de projeto, crie um arquivo que represente o modelo de usuário. Por exemplo, você pode criar um arquivo chamado `usuario.js` na pasta `models`.

   ```javascript
   // models/usuario.js
   const mongoose = require('mongoose');

   // Defina o esquema do modelo de usuário
   const usuarioSchema = new mongoose.Schema({
       nome: {
           type: String,
           required: true,
       },
       sobrenome: {
           type: String,
           required: true,
       },
       email: {
           type: String,
           required: true,
           unique: true, // O email deve ser único
       },
       idade: {
           type: Number,
           required: true,
       },
       pais: {
           type: String,
       },
   });

   // Crie o modelo de usuário com base no esquema
   const Usuario = mongoose.model('Usuario', usuarioSchema);

   // Exporte o modelo para uso em outros lugares do aplicativo
   module.exports = Usuario;
   ```

3. **Usando o Modelo em Rotas**:

   Agora você pode usar o modelo de usuário em suas rotas para interagir com o banco de dados MongoDB. Por exemplo, em um arquivo de roteamento (por exemplo, `usuarios.js`), você pode importar o modelo de usuário e criar rotas para criar, listar, atualizar ou excluir usuários.

   ```javascript
   // routes/usuarios.js
   const express = require('express');
   const router = express.Router();
   const Usuario = require('../models/usuario'); // Importe o modelo de usuário

   // Rota para criar um novo usuário
   router.post('/criar', async (req, res) => {
       try {
           const novoUsuario = new Usuario(req.body);
           const usuarioSalvo = await novoUsuario.save();
           res.json(usuarioSalvo);
       } catch (error) {
           console.error('Erro ao criar usuário:', error);
           res.status(500).json({ error: 'Erro ao criar usuário' });
       }
   });

   // Outras rotas para listar, atualizar ou excluir usuários

   module.exports = router;
   ```

4. **Configurar o Roteador no Arquivo Principal**:

   No arquivo principal do seu aplicativo (por exemplo, `app.js`), configure o roteador para lidar com as rotas relacionadas aos usuários.

   ```javascript
   // app.js
   const express = require('express');
   const mongoose = require('mongoose');
   const usuariosRouter = require('./routes/usuarios'); // Importe o roteador de usuários

   // Conecte-se ao banco de dados MongoDB
   mongoose.connect('mongodb://localhost/seu-banco-de-dados', {
       useNewUrlParser: true,
       useUnifiedTopology: true,
   });

   // Configurações e middlewares

   // Use o roteador de usuários para lidar com rotas relacionadas a usuários
   app.use('/usuarios', usuariosRouter);

   // Inicialize o servidor
   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => {
       console.log(`Servidor rodando na porta ${PORT}`);
   });
   ```

Agora você tem um modelo de usuário definido e pode criar rotas para criar, listar, atualizar e excluir usuários em seu aplicativo Express.js. Lembre-se de substituir `'mongodb://localhost/seu-banco-de-dados'` pelo URL de conexão real do seu banco de dados MongoDB. Além disso, ajuste as rotas e os controladores de acordo com as necessidades do seu projeto.