# CONTROLANDO ACESSO
Para controlar o acesso a determinadas rotas apenas para administradores (ADMS) em uma aplicação Express.js com Passport.js, você pode criar um middleware personalizado que verifica se o usuário autenticado é um administrador antes de permitir o acesso à rota desejada. Aqui estão os passos básicos para fazer isso:

1. **Defina um Middleware de Verificação de Administrador:**

   Crie um middleware que verifica se o usuário autenticado é um administrador. Você pode fazer isso adicionando uma propriedade `isAdmin` ao objeto de usuário após a autenticação e verificando essa propriedade em rotas protegidas para administradores.

   ```javascript
   // Middleware para verificar se o usuário é administrador
   function isAdmin(req, res, next) {
       if (req.isAuthenticated() && req.user.isAdmin) {
           // O usuário é um administrador, permita o acesso
           return next();
       }
       // O usuário não é um administrador, redirecione ou retorne um erro
       res.redirect('/'); // Redireciona para a página inicial, por exemplo
   }
   ```

2. **Aplique o Middleware em Rotas Protegidas para Administradores:**

   Agora você pode aplicar o middleware `isAdmin` a qualquer rota que deseja proteger. Por exemplo:

   ```javascript
   // Rota protegida para administradores
   app.get('/admin/dashboard', isAdmin, (req, res) => {
       // Esta rota só será acessível por administradores autenticados
       res.render('admin/dashboard');
   });
   ```

   Neste exemplo, a rota "/admin/dashboard" só será acessível por usuários autenticados que também tenham a propriedade `isAdmin` definida como verdadeira.

3. **Defina a Propriedade `isAdmin` no Objeto de Usuário:**

   Certifique-se de definir a propriedade `isAdmin` no objeto de usuário durante o processo de autenticação, com base em sua lógica de negócios. Por exemplo, ao criar um novo usuário administrador:

   ```javascript
   const novoUsuario = new Usuario({
       nome: 'Nome do Usuário',
       email: 'email@example.com',
       senha: 'senha',
       isAdmin: true // Define o usuário como administrador
   });
   ```

   Ou, ao verificar as credenciais durante a autenticação, você pode definir `isAdmin` com base nas regras de negócios da sua aplicação.

4. **Teste e Ajuste:**

   Teste a funcionalidade para garantir que apenas administradores tenham acesso às rotas protegidas. Ajuste a lógica conforme necessário com base em suas necessidades específicas.

Isso permite que você controle o acesso a rotas específicas apenas para administradores autenticados, garantindo que apenas eles tenham permissão para acessar determinadas partes da sua aplicação. Certifique-se de ajustar os nomes de rotas e as condições de verificação de administrador de acordo com a estrutura e os requisitos da sua aplicação.