# NODEMON
O Nodemon é uma ferramenta muito útil para desenvolvedores Node.js. Ele é um utilitário que ajuda a automatizar o processo de reinicialização do servidor sempre que você faz alterações em seu código-fonte. Isso é especialmente útil durante o desenvolvimento de aplicativos, pois economiza tempo e esforço, eliminando a necessidade de reiniciar manualmente o servidor após cada mudança no código.

Aqui estão algumas informações importantes sobre o Nodemon:

## Instalação do Nodemon:
Você pode instalar o Nodemon globalmente ou localmente em um projeto Node.js. A instalação global é útil quando você deseja usá-lo em vários projetos. Para instalar globalmente, use o seguinte comando:

```bash
npm install -g nodemon
```

Para instalá-lo localmente em um projeto específico (recomendado), use:

```bash
npm install --save-dev nodemon
```

## Uso Básico do Nodemon:
Para usar o Nodemon, você precisa apenas substituir o comando `node` pelo `nodemon` ao iniciar seu aplicativo Node.js. Por exemplo, se você costuma iniciar seu aplicativo assim:

```bash
node app.js
```

Você pode substituí-lo por:

```bash
nodemon app.js
```

O Nodemon agora observará os arquivos do projeto e reinicializará automaticamente o servidor sempre que detectar mudanças em qualquer arquivo JavaScript.

## Configuração do Nodemon:
O Nodemon permite que você personalize seu comportamento por meio de um arquivo de configuração chamado `nodemon.json` ou usando opções de linha de comando. Com um arquivo `nodemon.json`, você pode definir configurações específicas para o seu projeto. Por exemplo:

```json
{
  "watch": ["src"],
  "ext": "js,json"
}
```

Neste exemplo, estamos dizendo ao Nodemon para observar a pasta `src` e reiniciar o servidor sempre que encontrar arquivos JavaScript ou JSON modificados.

## Funcionalidades Avançadas:
O Nodemon oferece várias funcionalidades avançadas, como suporte a transpiladores (por exemplo, Babel ou TypeScript), execução de comandos personalizados antes ou após a reinicialização e muito mais. Você pode explorar essas funcionalidades em detalhes na [documentação oficial do Nodemon](https://nodemon.io/).

Em resumo, o Nodemon é uma ferramenta valiosa para desenvolvedores Node.js que desejam tornar o desenvolvimento de aplicativos mais eficiente. Ele ajuda a automatizar a tarefa de reiniciar o servidor sempre que ocorrem alterações em seu código-fonte, o que facilita o desenvolvimento e a depuração de aplicativos Node.js.