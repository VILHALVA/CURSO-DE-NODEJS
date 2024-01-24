# CURSO DE NODEJS
👨‍⚖️NODEJS É UM SOFTWARE QUE PERMITE A EXECUÇÃO DO CÓDIGO JAVASCRIPT FORA DO NAVEGADOR WEB.

[![GitHub Repo stars](https://img.shields.io/badge/VILHALVA-GITHUB-03A9F4?logo=github)](https://github.com/VILHALVA) 
[![GitHub Repo stars](https://img.shields.io/badge/LINGUAGEM%20DE-PROGRAMAÇÃO-03A9F4?logo=github)](https://github.com/VILHALVA/CURSO-DE-JAVASCRIPT) <br>

[![GitHub Repo stars](https://img.shields.io/badge/-NODEJS%20BASICO-blueviolet)](https://www.youtube.com/playlist?list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B)
[![GitHub Repo stars](https://img.shields.io/badge/-NODEJS%20API-blueviolet)](https://youtube.com/playlist?list=PL1hl9qLyFtfDXY9NO8F3TnjxezKJ_1HlI&si=jRR0rrVw1WtSkcRo)

# 🈶NODE JS COM MYSQL NOS FORMULARIOS:
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

# CARACTERÍSTICAS
## POSITIVAS:
- **JavaScript no Lado do Servidor:** Node.js permite a execução de JavaScript no lado do servidor, unificando o desenvolvimento de aplicações web no lado do cliente e no lado do servidor.

- **Assíncrono e Orientado a Eventos:** Utiliza uma arquitetura assíncrona e orientada a eventos, permitindo a manipulação eficiente de muitas conexões simultâneas.

- **Módulos Nativos e Terceiros:** Possui um vasto ecossistema de módulos nativos e de terceiros disponíveis por meio do npm (Node Package Manager), facilitando o desenvolvimento e a expansão de funcionalidades.

- **Escalabilidade Horizontal:** É conhecido por sua capacidade de escalabilidade horizontal, sendo eficiente na manipulação de um grande número de solicitações simultâneas.

- **Desenvolvimento Rápido:** Oferece um ciclo de desenvolvimento rápido, permitindo a atualização e visualização instantânea de alterações sem a necessidade de reiniciar o servidor.

- **Suporte a Plataformas Diversas:** Node.js é multiplataforma e pode ser executado em diversos sistemas operacionais, incluindo Windows, macOS e Linux.

## NEGATIVAS:
- **Callback Hell:** A utilização excessiva de callbacks pode levar a uma estrutura de código complexa conhecida como "Callback Hell" em projetos maiores.

- **Single Thread:** Apesar de sua eficiência assíncrona, Node.js é single-threaded, o que pode tornar o processamento de operações intensivas em CPU menos eficiente.

- **Maturidade de Algumas Bibliotecas:** Algumas bibliotecas podem ser menos maduras ou menos estáveis em comparação com tecnologias mais estabelecidas em outras linguagens.

- **Necessidade de Gestão de Dependências:** A gestão de dependências no ecossistema Node.js pode se tornar complexa, especialmente em projetos com muitas dependências ou em ambientes de produção.

- **Não é Adequado para Tarefas Síncronas Pesadas:** Devido à sua natureza assíncrona, Node.js pode não ser a escolha ideal para tarefas síncronas pesadas ou processamento de longa duração.

- **Incompatibilidade com Código Síncrono:** O uso excessivo de código síncrono pode prejudicar o desempenho global do servidor Node.js, exigindo uma abordagem cuidadosa para evitar gargalos.
