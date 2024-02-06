# LISTANDO POSTAGENS
Para listar postagens em um aplicativo Node.js usando Express.js e Mongoose, siga estas etapas:

1. **Crie uma Rota para Listar Postagens**: Em seu arquivo de roteamento, crie uma rota que irá listar todas as postagens. Você pode chamar essa rota de `/posts` ou qualquer outro caminho de sua escolha. Aqui está um exemplo de rota em `routes/posts.js`:

```javascript
const express = require('express');
const router = express.Router();
const Postagem = require('../models/Postagem'); // Importe o modelo de postagem

// Rota para listar todas as postagens
router.get('/', async (req, res) => {
  try {
    // Busque todas as postagens no banco de dados
    const postagens = await Postagem.find();

    // Renderize uma visualização para exibir as postagens
    res.render('posts/list', { postagens }); // Use seu mecanismo de visualização
  } catch (error) {
    console.error(error);
    res.render('erro'); // Lide com erros de forma apropriada
  }
});

module.exports = router;
```

2. **Crie a Visualização para Listar Postagens**: Crie uma visualização (view) para listar as postagens. No exemplo anterior, usamos `'posts/list'` como o caminho da visualização. Aqui está um exemplo simples de como você pode exibir as postagens em uma tabela HTML:

```handlebars
<!-- views/posts/list.handlebars -->

<h2>Lista de Postagens</h2>
<table>
  <thead>
    <tr>
      <th>Título</th>
      <th>Data de Criação</th>
    </tr>
  </thead>
  <tbody>
    {{#each postagens}}
    <tr>
      <td><a href="/posts/{{_id}}">{{titulo}}</a></td>
      <td>{{dataCriacao}}</td>
    </tr>
    {{/each}}
  </tbody>
</table>
```

3. **Configure a Rota no Aplicativo Principal**: Em seu aplicativo principal (geralmente `app.js`), configure a rota `/posts` para usar o roteador que você criou para listar postagens. Certifique-se de configurar o mecanismo de visualização (Handlebars, neste exemplo) corretamente.

```javascript
const express = require('express');
const handlebars = require('express-handlebars'); 
const bodyParser = require('body-parser');
const app = express();
const postsRouter = require('./routes/posts'); // Importe o roteador de postagens

// Configurações
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine('handlebars', handlebars({ defaultLayout: 'main' })); 
app.set('view engine', 'handlebars');

// Roteadores
app.use('/posts', postsRouter); // Use o roteador de postagens

// Outros middlewares e configurações

// Inicie o servidor
const PORT = 8081;
app.listen(PORT, () => {
    console.log("Servidor rodando na porta " + PORT);
});
```

4. **Liste as Postagens**: Agora, quando você acessar `/posts` em seu aplicativo, ele renderizará a visualização `list.handlebars` com a lista de postagens do banco de dados.

Certifique-se de configurar o Mongoose corretamente para se conectar ao seu banco de dados MongoDB. Ajuste o código conforme necessário para se adequar à estrutura e às necessidades específicas do seu aplicativo.
