# LOGOUT
Para implementar a funcionalidade de logout em uma aplicação Express.js com Passport.js, você pode seguir os seguintes passos:

1. **Rota de Logout:**

   Crie uma rota que lida com o pedido de logout. Esta rota deve chamar o método `req.logout()` fornecido pelo Passport.js para limpar a sessão de autenticação do usuário.

   ```javascript
   // Rota de logout
   app.get('/logout', (req, res) => {
       req.logout(); // Limpa a sessão de autenticação
       res.redirect('/'); // Redireciona para a página inicial ou qualquer outra página desejada após o logout
   });
   ```

2. **Link de Logout na Página:**

   Adicione um link ou botão na página da sua aplicação para permitir que os usuários façam logout. Este link ou botão deve apontar para a rota de logout que você criou.

   Por exemplo, em uma página de perfil do usuário:

   ```html
   <a href="/logout">Logout</a>
   ```

3. **Teste e Ajuste:**

   Teste a funcionalidade de logout para garantir que os usuários sejam deslogados corretamente e redirecionados para a página desejada após o logout.

Ao clicar no link ou botão de logout, o usuário será redirecionado para a rota de logout que chama `req.logout()` para encerrar a sessão de autenticação. Após o logout, você pode redirecionar o usuário para a página inicial ou qualquer outra página relevante.

Certifique-se de ajustar os nomes de rotas e páginas de redirecionamento de acordo com a estrutura da sua aplicação. O processo acima é um exemplo geral de como implementar o logout, e você pode personalizá-lo com base nas necessidades específicas da sua aplicação.