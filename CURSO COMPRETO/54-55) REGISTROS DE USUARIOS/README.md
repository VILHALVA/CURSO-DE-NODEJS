# REGISTROS DE USUARIOS
Para implementar o registro de usuários em um aplicativo Express.js com o Mongoose, você pode seguir estas etapas:

1. **Defina o Modelo de Usuário**:

   Certifique-se de que você já definiu um modelo de usuário usando o Mongoose, como mencionei nas etapas anteriores. O modelo de usuário deve incluir campos como `nome`, `sobrenome`, `email` e `senha`.

2. **Crie uma Rota para o Registro**:

   Em seu arquivo de rotas, crie uma rota para o registro de usuários. Você pode usar a rota POST para enviar dados do formulário de registro para o servidor. Aqui está um exemplo de como você pode fazer isso:

   ```javascript
   // routes/usuarios.js
   const express = require('express');
   const router = express.Router();
   const Usuario = require('../models/usuario');

   // Rota para exibir o formulário de registro
   router.get('/registro', (req, res) => {
       res.render('registro'); // Crie uma view chamada registro.handlebars
   });

   // Rota para processar o registro
   router.post('/registro', async (req, res) => {
       try {
           // Recupere os dados do formulário de registro
           const { nome, sobrenome, email, senha } = req.body;

           // Verifique se o email já está em uso
           const usuarioExistente = await Usuario.findOne({ email });

           if (usuarioExistente) {
               return res.status(400).json({ error: 'Email já em uso' });
           }

           // Crie um novo usuário
           const novoUsuario = new Usuario({ nome, sobrenome, email, senha });

           // Salve o novo usuário no banco de dados
           await novoUsuario.save();

           res.redirect('/login'); // Redirecione para a página de login após o registro
       } catch (error) {
           console.error('Erro ao registrar usuário:', error);
           res.status(500).json({ error: 'Erro ao registrar usuário' });
       }
   });

   module.exports = router;
   ```

3. **Crie uma Página de Registro (View)**:

   Você precisa criar uma página HTML (ou template Handlebars, Jade, etc.) para exibir o formulário de registro aos usuários. Certifique-se de criar uma view chamada `registro.handlebars` (ou outro formato de template que você estiver usando) que tenha campos para `nome`, `sobrenome`, `email` e `senha`.

   ```html
   <!-- views/registro.handlebars -->
   <!DOCTYPE html>
   <html>
   <head>
       <title>Registro de Usuário</title>
   </head>
   <body>
       <h1>Registro de Usuário</h1>
       <form method="POST" action="/usuarios/registro">
           <label for="nome">Nome:</label>
           <input type="text" name="nome" required><br>

           <label for="sobrenome">Sobrenome:</label>
           <input type="text" name="sobrenome" required><br>

           <label for="email">Email:</label>
           <input type="email" name="email" required><br>

           <label for="senha">Senha:</label>
           <input type="password" name="senha" required><br>

           <button type="submit">Registrar</button>
       </form>
   </body>
   </html>
   ```

4. **Configure o Roteador de Usuários**:

   No arquivo principal do seu aplicativo (geralmente `app.js`), configure o roteador de usuários para lidar com as rotas relacionadas aos usuários.

   ```javascript
   // app.js
   const express = require('express');
   const mongoose = require('mongoose');
   const expressHandlebars = require('express-handlebars');
   const usuariosRouter = require('./routes/usuarios');

   // Configurações e middlewares

   // Conecte-se ao banco de dados MongoDB
   mongoose.connect('mongodb://localhost/seu-banco-de-dados', {
       useNewUrlParser: true,
       useUnifiedTopology: true,
   });

   // Configure o mecanismo de visualização (handlebars, no caso)
   app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
   app.set('view engine', 'handlebars');

   // Use o roteador de usuários
   app.use('/usuarios', usuariosRouter);

   // Inicialize o servidor
   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => {
       console.log(`Servidor rodando na porta ${PORT}`);
   });
   ```

5. **Estilize e Valide o Formulário**:

   Lembre-se de estilizar o formulário de registro de acordo com suas necessidades de design. Além disso, você pode adicionar validação do lado do cliente e do lado do servidor para garantir que os dados do usuário sejam válidos antes de serem registrados no banco de dados.

   Com essas etapas, você terá um sistema de registro de usuários básico em seu aplicativo Express.js. Certifique-se de ajustar o código de acordo com suas necessidades específicas de projeto e segurança.