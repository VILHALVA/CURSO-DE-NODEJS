# LISTANDO DADOS DO BANCO
## CONCEITO:
Para listar os dados do banco de dados usando o Sequelize e o Express, você pode seguir os seguintes passos:

1. **Crie uma Rota para Listar os Dados**: Primeiro, crie uma rota no seu aplicativo Express que será responsável por listar os dados do banco de dados. Por exemplo:

```javascript
app.get('/listar', function(req, res){
  Post.findAll().then(function(posts){
    res.render("LISTA_POSTS", { posts });
  });
});
```

Nesse exemplo, estamos criando uma rota `/listar` que consulta todos os registros na tabela de postagens (`Post`) usando o método `findAll()` do Sequelize. Em seguida, renderizamos uma página chamada "LISTA_POSTS" e passamos os dados recuperados como um objeto `posts`.

2. **Crie uma Página para Exibir os Dados**: Agora, você precisa criar uma página de visualização (um arquivo Handlebars) chamada "LISTA_POSTS.handlebars" que irá exibir os dados recuperados. Por exemplo:

```handlebars
<!DOCTYPE html>
<html>
<head>
  <title>Lista de Posts</title>
</head>
<body>
  <h1>Lista de Posts</h1>
  <ul>
    {{#each posts}}
      <li>{{titulo}} - {{conteudo}}</li>
    {{/each}}
  </ul>
</body>
</html>
```

Nesta página, estamos usando o Handlebars para iterar sobre os objetos `posts` passados e exibir seus campos (`titulo` e `conteudo`) em uma lista.

3. **Acesse a Página de Listagem**: Você pode acessar a página de listagem navegando para `http://localhost:8081/listar` (ou o URL da sua aplicação e a rota correspondente).

Lembre-se de que você deve ter os dados previamente inseridos no banco de dados para que a lista seja preenchida.

Certifique-se de que os nomes das variáveis e arquivos correspondam aos que você está usando em seu aplicativo.

Dessa forma, você pode criar uma rota para listar e exibir os dados do banco de dados em uma página. Certifique-se de adaptar o código de acordo com a estrutura do seu projeto e as configurações do Sequelize.

## PROBLEMAS COM A HOME:
### [COMENTÁRIO DO `AJPF44`](https://www.youtube.com/watch?v=Oo8oNXyrxB0&list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B&index=25)
> Opa eae, muito boa as aulas. Como faz algum tempo desde que foram lançadas, acontece o problema natural de ficarem um pouco desuatalizadas. O método '.all()' utilizado em Post.all() foi substituido por `.findAll()`. Outra coisa que observei é que para renderizar os dados com o {{#each}} é necessário habilitar lá no handlebars, segue o código como apontou o daniel em outro comentário: 
```javascript
app.engine('handlebars', handlebars({
        defaultLayout: 'main',
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        },
    }))
```