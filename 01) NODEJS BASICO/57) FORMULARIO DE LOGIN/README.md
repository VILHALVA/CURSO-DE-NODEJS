# FORMULARIO DE LOGIN
Aqui está um exemplo de formulário de login em HTML que você pode usar em seu aplicativo Express.js:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário de Login</title>
</head>
<body>
    <h2>Formulário de Login</h2>
    <form action="/usuarios/login" method="POST">
        <div>
            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div>
            <label for="senha">Senha:</label>
            <input type="password" id="senha" name="senha" required>
        </div>
        <button type="submit">Entrar</button>
    </form>
</body>
</html>
```

Certifique-se de criar uma rota em seu aplicativo Express.js para processar o formulário de login e autenticar o usuário. Por exemplo:

```javascript
const express = require('express');
const router = express.Router();
const passport = require('passport'); // Você precisará do Passport para autenticação

// Rota para exibir o formulário de login
router.get('/login', (req, res) => {
    res.render('usuarios/login'); // Renderize o formulário de login
});

// Rota para processar o formulário de login
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/', // Redireciona após o login bem-sucedido
        failureRedirect: '/usuarios/login', // Redireciona em caso de falha no login
        failureFlash: true // Ativa mensagens de erro flash (se configuradas)
    })(req, res, next);
});

module.exports = router;
```

Lembre-se de que este é um exemplo básico e que você precisa configurar o Passport.js ou outra estratégia de autenticação de acordo com as necessidades do seu aplicativo. Certifique-se de instalar o Passport e configurar a estratégia de autenticação no seu aplicativo. Além disso, você pode adicionar mensagens flash para fornecer feedback ao usuário sobre o sucesso ou a falha do login.

Depois de criar o formulário de login e as rotas correspondentes, você pode adicionar a lógica de autenticação para verificar as credenciais do usuário no banco de dados e redirecionar o usuário para a página apropriada com base no resultado da autenticação.