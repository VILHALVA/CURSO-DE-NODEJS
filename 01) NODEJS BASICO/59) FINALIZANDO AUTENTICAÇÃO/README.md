# FINALIZANDO AUTENTICAÇÃO
```javascript
router.post("/login", (req, res, next) => {
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/usuarios/login",
        failureFlash: true
    })(req, res, next);
});
```
Esse código faz parte do processo de autenticação de usuário usando o Passport.js em uma aplicação Express.js. Vou explicar linha por linha:

1. `router.post("/login", (req, res, next) => {`: Isso define uma rota POST para o endpoint "/login". Isso significa que quando um formulário de login for enviado para esse endpoint, este código será executado.

2. `passport.authenticate("local", { ... })(req, res, next);`: Esta linha é um middleware do Passport que cuida da autenticação. O método `passport.authenticate` é usado para autenticar um usuário com base na estratégia "local", que é uma estratégia de autenticação local que você configurou anteriormente.

   - `"local"`: É o nome da estratégia que você definiu ao configurar o Passport. Ela se refere à estratégia de autenticação local que verifica o nome de usuário (email) e a senha do usuário em seu banco de dados.

   - `{ successRedirect, failureRedirect, failureFlash }`: São opções que determinam o comportamento após a autenticação ser realizada com sucesso ou falhar.
   
      - `successRedirect`: É o caminho para onde o usuário será redirecionado após uma autenticação bem-sucedida. Neste caso, o usuário será redirecionado para a raiz ("/") da aplicação.
      
      - `failureRedirect`: É o caminho para onde o usuário será redirecionado se a autenticação falhar. Neste caso, o usuário será redirecionado de volta para a página de login ("/usuarios/login").
      
      - `failureFlash`: É uma opção que ativa o recurso de mensagens flash. As mensagens flash são mensagens temporárias que podem ser exibidas ao usuário após uma ação. Se a autenticação falhar, você pode usar as mensagens flash para informar ao usuário o motivo do erro, como "Credenciais inválidas".

3. `(req, res, next);`: Esta parte da linha está chamando a função retornada por `passport.authenticate`. Ela é uma função de middleware que processa a autenticação. O middleware recebe os objetos `req` e `res` e também a função `next`, que é usada para encadear middleware.

Em resumo, quando um POST é feito para "/login", o Passport.js autenticará as credenciais fornecidas pelo usuário usando a estratégia "local". Se a autenticação for bem-sucedida, o usuário será redirecionado para a página inicial ("/"). Se a autenticação falhar, o usuário será redirecionado de volta para a página de login ("/usuarios/login") e uma mensagem de erro (se configurada) será exibida graças à opção `failureFlash`. O uso do `next` permite que você encadeie outros middlewares após este, se necessário.