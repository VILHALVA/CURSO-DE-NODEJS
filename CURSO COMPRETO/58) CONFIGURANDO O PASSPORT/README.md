# CONFIGURANDO O PASSPORT
Para configurar o Passport.js em seu aplicativo Express.js, siga estas etapas:

1. Instale as dependências necessárias:

Certifique-se de ter as seguintes dependências instaladas em seu projeto:

```bash
npm install --save passport
```
```bash
npm install --save passport-local
```

2. Configure o Passport.js em seu aplicativo:

Crie um arquivo para configurar o Passport.js, por exemplo, `passport-config.js`. Nesse arquivo, configure as estratégias de autenticação, serialização e desserialização do usuário.

```javascript
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('usuarios');

passport.use(new LocalStrategy({ usernameField: 'email' }, (email, senha, done) => {
  User.findOne({ email: email }).then((user) => {
    if (!user) {
      return done(null, false, { message: 'E-mail não cadastrado' });
    }

    bcrypt.compare(senha, user.senha, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Senha incorreta' });
      }
    });
  });
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
```

3. Configure o Express.js para usar o Passport.js e as sessões:

No arquivo principal do seu aplicativo (geralmente `app.js`), adicione as seguintes linhas para configurar o Passport.js e a sessão:

```javascript
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();

// Configuração de sessão
app.use(session({
  secret: 'sua-chave-secreta-aqui',
  resave: true,
  saveUninitialized: true
}));

// Inicialização do Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Flash messages
app.use(flash());

// Middleware para passar mensagens flash para todas as views
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});
```

Certifique-se de substituir `'sua-chave-secreta-aqui'` por uma chave secreta segura para sua aplicação.

4. Defina as rotas de autenticação:

Crie as rotas para o registro e o login de usuários em seu aplicativo. Você já fez isso em uma pergunta anterior. Certifique-se de chamar `passport.authenticate` nas rotas apropriadas para lidar com a autenticação.

5. Proteja as rotas que exigem autenticação:

Se você tiver rotas que exigem autenticação, você pode usar o middleware `ensureAuthenticated` para protegê-las. Por exemplo:

```javascript
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash('error_msg', 'Você precisa fazer login para acessar esta página.');
  res.redirect('/usuarios/login');
}

// Rota protegida que exige autenticação
app.get('/perfil', ensureAuthenticated, (req, res) => {
  // Rota acessível apenas para usuários autenticados
  res.render('usuarios/perfil');
});
```

Agora seu aplicativo está configurado para autenticação com o Passport.js. Certifique-se de que suas rotas e views estejam configuradas de acordo com as necessidades do seu aplicativo. Lembre-se de que este é um exemplo básico e que você pode personalizar ainda mais a autenticação de acordo com os requisitos do seu projeto.