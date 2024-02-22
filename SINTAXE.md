# NODEJS COM MYSQL:
Aqui está um exemplo completo de um sistema de cadastro e login usando HTML, CSS e Node.js. Este é um exemplo básico para fins educativos, e você deve adicionar medidas de segurança adicionais ao implementar em um ambiente de produção.

1. **Estrutura de Pastas:**

   Crie uma estrutura de pastas como esta:

   ```
   projeto/
   ├── public/
   │   ├── index.html
   │   ├── style.css
   │   ├── script.js
   └── server.js
   ```

2. **index.html:**

   ```html
   <!DOCTYPE html>
   <html lang="pt-br">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link rel="stylesheet" href="style.css">
       <title>Cadastro e Login</title>
   </head>
   <body>
       <div class="container">
           <div class="form-container">
               <h1>Cadastro</h1>
               <form id="signup-form">
                   <input type="email" name="email" placeholder="Email" required>
                   <input type="password" name="senha" placeholder="Senha" required>
                   <button type="submit">Cadastrar</button>
               </form>
           </div>
           <div class="form-container">
               <h1>Login</h1>
               <form id="login-form">
                   <input type="email" name="email" placeholder="Email" required>
                   <input type="password" name="senha" placeholder="Senha" required>
                   <button type="submit">Login</button>
               </form>
           </div>
       </div>
       <script src="script.js"></script>
   </body>
   </html>
   ```

3. **style.css:**

   ```css
   body {
       font-family: Arial, sans-serif;
       margin: 0;
       display: flex;
       justify-content: center;
       align-items: center;
       height: 100vh;
       background-color: #f2f2f2;
   }

   .container {
       display: flex;
   }

   .form-container {
       background-color: #fff;
       padding: 20px;
       border-radius: 5px;
       margin: 0 10px;
       box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
   }

   h1 {
       margin-top: 0;
   }

   input {
       width: 100%;
       margin: 8px 0;
       padding: 10px;
       border: 1px solid #ccc;
       border-radius: 3px;
       box-sizing: border-box;
   }

   button {
       background-color: #007bff;
       color: #fff;
       border: none;
       border-radius: 3px;
       padding: 10px 20px;
       cursor: pointer;
   }
   ```

4. **script.js:**

   ```javascript
   document.addEventListener('DOMContentLoaded', function () {
       const signupForm = document.getElementById('signup-form');
       const loginForm = document.getElementById('login-form');

       signupForm.addEventListener('submit', async function (event) {
           event.preventDefault();
           const formData = new FormData(signupForm);
           const response = await fetch('/signup', {
               method: 'POST',
               body: formData,
           });
           const result = await response.json();
           alert(result.message);
       });

       loginForm.addEventListener('submit', async function (event) {
           event.preventDefault();
           const formData = new FormData(loginForm);
           const response = await fetch('/login', {
               method: 'POST',
               body: formData,
           });
           const result = await response.json();
           alert(result.message);
       });
   });
   ```

5. **server.js:**

   ```javascript
   const express = require('express');
   const bodyParser = require('body-parser');
   const bcrypt = require('bcrypt');
   const app = express();
   const port = 3000;

   app.use(express.static('public'));
   app.use(bodyParser.urlencoded({ extended: false }));

   const users = [];

   app.post('/signup', async (req, res) => {
       const { email, senha } = req.body;
       const hashedSenha = await bcrypt.hash(senha, 10);
       users.push({ email, senha: hashedSenha });
       res.json({ message: 'Cadastro bem-sucedido!' });
   });

   app.post('/login', async (req, res) => {
       const { email, senha } = req.body;
       const user = users.find(u => u.email === email);
       if (user && await bcrypt.compare(senha, user.senha)) {
           res.json({ message: 'Login bem-sucedido!' });
       } 
       else {
           res.json({ message: 'Credenciais inválidas.'});
       }
   });

   app.listen(port, () => {
       console.log(`Servidor rodando em http://localhost:${port}`);
   });
   ```

Certifique-se de instalar as dependências necessárias do Node.js usando `npm install express body-parser bcrypt`.

Este é um exemplo básico para demonstrar a funcionalidade de cadastro e login. Em um ambiente de produção real, você precisará implementar medidas de segurança mais robustas e cuidadosas. Certifique-se de validar, filtrar e proteger os dados de entrada e usar técnicas de criptografia segura para proteger as senhas.