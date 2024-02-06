# HANDLEBARDS
## CONCEITO
Handlebars é um mecanismo de modelo de JavaScript que permite criar modelos de dados dinâmicos em HTML. Ele é amplamente usado em aplicativos da web para renderizar dinamicamente páginas HTML com dados de backend. Handlebars simplifica a geração de conteúdo HTML com base em dados, permitindo que você insira variáveis, expressões e estruturas de controle em seus modelos HTML.

Aqui estão alguns conceitos-chave sobre o Handlebars:

1. **Variáveis**: Você pode usar `{{variavel}}` em seus modelos Handlebars para inserir valores de variáveis em seu HTML. Por exemplo, `{{nome}}` será substituído pelo valor da variável `nome` quando o modelo for renderizado.

2. **Expressões**: Além de variáveis simples, você pode usar expressões Handlebars para realizar operações em dados e exibir os resultados. Por exemplo, `{{valor1 + valor2}}` calculará a soma de `valor1` e `valor2` antes de inserir o resultado no HTML.

3. **Estruturas de Controle**: Handlebars suporta estruturas de controle como `{{#if condicao}}`, `{{#each lista}}`, e `{{#unless condicao}}`, que permitem renderizar partes do modelo condicionalmente com base em dados.

4. **Partials**: Partials são modelos reutilizáveis que você pode incluir em outros modelos. Isso é útil para componentização e reutilização de código HTML.

5. **Helpers**: Você pode definir e usar helpers personalizados para estender as capacidades do Handlebars. Os helpers permitem criar funções personalizadas para formatar, processar ou manipular dados antes de serem renderizados no modelo.

6. **Segurança**: Handlebars escapa automaticamente conteúdo para evitar injeção de código. Isso ajuda a proteger seu aplicativo contra ataques XSS (Cross-Site Scripting).

Aqui está um exemplo simples de um modelo Handlebars:

```handlebars
<!DOCTYPE html>
<html>
<head>
    <title>{{titulo}}</title>
</head>
<body>
    <h1>Bem-vindo, {{nome}}!</h1>
    
    <ul>
        {{#each itens}}
            <li>{{this}}</li>
        {{/each}}
    </ul>
</body>
</html>
```

Neste exemplo:

- `{{titulo}}` e `{{nome}}` são variáveis que serão substituídas pelos valores correspondentes quando o modelo for renderizado.

- `{{#each itens}}` inicia um loop sobre a matriz `itens` e `{{this}}` insere cada elemento da matriz no `<li>`.

Para usar o Handlebars em um aplicativo Node.js, você precisará de uma biblioteca para renderizar os modelos Handlebars, como o `express-handlebars` se você estiver usando o Express.js. Além disso, você deve compilar seus modelos Handlebars em funções que podem ser chamadas para renderizar HTML dinamicamente com os dados apropriados.

Handlebars é uma ferramenta poderosa para criar vistas dinâmicas em aplicativos da web e é amplamente adotado na comunidade de desenvolvimento web. Se você deseja aprender mais ou tem perguntas específicas sobre o uso do Handlebars em um contexto específico, sinta-se à vontade para perguntar!

## INSTALANDO E CONFIGURANDO:
Para instalar e configurar o Handlebars em um projeto Node.js, você pode seguir os passos abaixo:

Passo 1: Inicialize um Projeto Node.js (se ainda não o fez):

Se você ainda não possui um projeto Node.js, pode inicializar um usando o npm (gerenciador de pacotes do Node.js) com o seguinte comando:

```bash
npm init -y
```

Isso criará um arquivo `package.json` com as configurações padrão.

Passo 2: Instale o Pacote Handlebars:

Instale o pacote `handlebars` usando o npm:

```bash
npm install handlebars
```

Este comando instalará o Handlebars em seu projeto.

Passo 3: Configure o Handlebars em seu Aplicativo:

Você pode configurar o Handlebars em seu aplicativo Node.js da seguinte maneira:

```javascript
const express = require('express');
const exphbs = require('express-handlebars'); // Importe o pacote express-handlebars

const app = express();
const port = 3000;

// Configuração do Handlebars como mecanismo de visualização padrão
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Configuração da pasta de visualizações (onde seus modelos Handlebars serão armazenados)
app.set('views', __dirname + '/views');

// Rota de exemplo para renderizar um modelo Handlebars
app.get('/', (req, res) => {
  const data = {
    titulo: 'Página de Exemplo',
    nome: 'John Doe',
    itens: ['Item 1', 'Item 2', 'Item 3']
  };

  res.render('index', data);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
```

Neste exemplo:

- Importamos o pacote `express-handlebars` como `exphbs`.
- Configuramos o Handlebars como o mecanismo de visualização padrão usando `app.engine` e `app.set`.
- Configuramos a pasta de visualizações onde seus modelos Handlebars serão armazenados usando `app.set('views', __dirname + '/views')`.
- Criamos uma rota de exemplo que renderiza um modelo Handlebars chamado "index" e passa dados para o modelo usando `res.render`.

Passo 4: Crie Modelos Handlebars:

Crie modelos Handlebars na pasta de visualizações (por padrão, a pasta `views`). Por exemplo, você pode criar um arquivo `index.handlebars` nesta pasta:

```handlebars
<!DOCTYPE html>
<html>
<head>
    <title>{{titulo}}</title>
</head>
<body>
    <h1>Bem-vindo, {{nome}}!</h1>
    
    <ul>
        {{#each itens}}
            <li>{{this}}</li>
        {{/each}}
    </ul>
</body>
</html>
```

Passo 5: Inicie seu Aplicativo Node.js:

Inicie seu aplicativo Node.js com o comando:

```bash
node seu_arquivo_js
```

Substitua `seu_arquivo_js` pelo nome do arquivo onde você configurou o Express e o Handlebars.

Se tudo estiver configurado corretamente, seu aplicativo Node.js com Handlebars deve estar rodando na porta especificada (no exemplo, porta 3000). Você pode acessar seu aplicativo em um navegador e ver a página renderizada com base no modelo Handlebars.

Este é um exemplo básico de como instalar e configurar o Handlebars em um projeto Node.js. Você pode personalizar ainda mais a configuração do Handlebars e criar modelos mais complexos conforme necessário para seu projeto específico.