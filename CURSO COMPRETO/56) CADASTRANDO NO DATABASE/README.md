# CADASTRANDO USUARIOS NO BANCO DE DADOS
Para cadastrar usuários no banco de dados MongoDB usando o Mongoose em um aplicativo Express.js, você pode seguir os seguintes passos:

1. **Defina o Modelo de Usuário**:

   Certifique-se de que você já tenha definido um modelo de usuário usando o Mongoose. Este modelo deve representar a estrutura de dados que você deseja armazenar para os usuários. Aqui está um exemplo simplificado de como o modelo de usuário pode ser definido:

   ```javascript
   // models/usuario.js
   const mongoose = require('mongoose');

   const usuarioSchema = new mongoose.Schema({
       nome: String,
       sobrenome: String,
       email: String,
       senha: String,
   });

   const Usuario = mongoose.model('Usuario', usuarioSchema);

   module.exports = Usuario;
   ```

2. **Criar uma Rota para o Cadastro de Usuários**:

   No arquivo de rotas do seu aplicativo, crie uma rota para o cadastro de usuários. Você pode usar o método HTTP POST para receber os dados do formulário de cadastro e, em seguida, salvar esses dados no banco de dados.

   ```javascript
   // routes/usuarios.js
   const express = require('express');
   const router = express.Router();
   const Usuario = require('../models/usuario');

   // Rota para exibir o formulário de cadastro de usuário
   router.get('/cadastro', (req, res) => {
       res.render('cadastro'); // Crie uma view chamada cadastro.handlebars
   });

   // Rota para processar o cadastro de usuário
   router.post('/cadastro', async (req, res) => {
       try {
           // Recupere os dados do formulário de cadastro
           const { nome, sobrenome, email, senha } = req.body;

           // Crie um novo usuário com os dados recebidos
           const novoUsuario = new Usuario({ nome, sobrenome, email, senha });

           // Salve o novo usuário no banco de dados
           await novoUsuario.save();

           res.redirect('/login'); // Redirecione para a página de login após o cadastro
       } catch (error) {
           console.error('Erro ao cadastrar usuário:', error);
           res.status(500).json({ error: 'Erro ao cadastrar usuário' });
       }
   });

   module.exports = router;
   ```

3. **Crie uma Página de Cadastro (View)**:

   Você precisa criar uma página HTML (ou template Handlebars, Jade, etc.) para exibir o formulário de cadastro aos usuários. Certifique-se de criar uma view chamada `cadastro.handlebars` (ou outro formato de template que você estiver usando) que tenha campos para `nome`, `sobrenome`, `email` e `senha`.

   ```html
   <!-- views/cadastro.handlebars -->
   <!DOCTYPE html>
   <html>
   <head>
       <title>Cadastro de Usuário</title>
   </head>
   <body>
       <h1>Cadastro de Usuário</h1>
       <form method="POST" action="/usuarios/cadastro">
           <label for="nome">Nome:</label>
           <input type="text" name="nome" required><br>

           <label for="sobrenome">Sobrenome:</label>
           <input type="text" name="sobrenome" required><br>

           <label for="email">Email:</label>
           <input type="email" name="email" required><br>

           <label for="senha">Senha:</label>
           <input type="password" name="senha" required><br>

           <button type="submit">Cadastrar</button>
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

   Lembre-se de estilizar o formulário de cadastro de acordo com suas necessidades de design. Além disso, você pode adicionar validação do lado do cliente e do lado do servidor para garantir que os dados do usuário sejam válidos antes de serem cadastrados no banco de dados.

Certifique-se de ajustar o código de acordo com suas necessidades específicas de projeto e segurança. Com essas etapas, você terá um sistema básico de cadastro de usuários em seu aplicativo Express.js.

## BCRYPTJS:
O `bcryptjs` é uma biblioteca em JavaScript que fornece funções para realizar o hash de senhas de forma segura e eficiente. Ele é amplamente utilizado em aplicativos web e sistemas para armazenar senhas de forma segura no banco de dados. O `bcryptjs` é uma versão puramente JavaScript do `bcrypt`, que é uma implementação C da mesma função. Ele é usado em aplicativos Node.js e no navegador.

A principal função do `bcryptjs` é a geração segura de hashes de senhas. Aqui estão alguns pontos-chave sobre como o `bcryptjs` funciona:

1. **Hashing de Senhas**: Em vez de armazenar senhas no banco de dados em texto simples, é altamente recomendável armazenar hashes das senhas. O `bcryptjs` fornece um método para gerar um hash a partir da senha original.

2. **Salt (Semente) Aleatório**: O `bcryptjs` gera automaticamente um valor aleatório chamado "salt" para cada senha que está sendo processada. O salt é adicionado à senha original antes do hash ser calculado. Isso torna mais difícil para os atacantes usarem tabelas de hash predefinidas (rainbow tables) para descobrir senhas.

3. **Hashes Fortemente Criptografados**: O `bcryptjs` utiliza um algoritmo de hash criptograficamente forte. O algoritmo é projetado para ser deliberadamente lento, o que torna mais difícil para os atacantes realizar ataques de força bruta ou ataques de dicionário.

4. **Comparação Segura**: Para verificar se uma senha é válida durante o processo de login, você pode usar a função `bcryptjs.compare()` para comparar a senha fornecida pelo usuário com o hash armazenado no banco de dados. A biblioteca lida automaticamente com a extração do salt do hash armazenado e a comparação dos resultados.

Aqui está um exemplo simplificado de como usar o `bcryptjs` para hashear e verificar senhas em um aplicativo Node.js:

```javascript
const bcrypt = require('bcryptjs');

// Hash da senha durante o registro
const senhaDoUsuario = 'senha123';
const saltRounds = 10; // Número de rounds de hashing (quanto maior, mais seguro, mas mais lento)
bcrypt.hash(senhaDoUsuario, saltRounds, (err, hash) => {
    if (err) {
        console.error('Erro ao criar o hash da senha:', err);
    } else {
        // O hash gerado pode ser armazenado no banco de dados
        console.log('Hash da senha:', hash);
    }
});

// Verificação da senha durante o login
const senhaDigitadaPeloUsuario = 'senha123'; // A senha fornecida pelo usuário durante o login
const hashArmazenadoNoBanco = 'hash_do_banco_de_dados'; // O hash armazenado no banco de dados
bcrypt.compare(senhaDigitadaPeloUsuario, hashArmazenadoNoBanco, (err, result) => {
    if (err) {
        console.error('Erro ao verificar a senha:', err);
    } else if (result) {
        console.log('Senha válida. O usuário pode fazer login.');
    } else {
        console.log('Senha inválida. O usuário não pode fazer login.');
    }
});
```

```bash
npm install --save bcryptjs 
```

É importante lembrar que a segurança de seu aplicativo não depende apenas do uso do `bcryptjs`. Práticas adicionais de segurança, como usar HTTPS, proteger contra ataques de injeção SQL e implementar autenticação de dois fatores, também são essenciais para manter suas informações de usuário seguras.
