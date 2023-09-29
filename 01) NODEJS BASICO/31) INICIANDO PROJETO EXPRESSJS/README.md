# INICIANDO PROJETO EXPRESS JS
Iniciar um projeto Express.js é um processo relativamente simples. Você precisa seguir alguns passos para configurar seu aplicativo. Abaixo estão as etapas para iniciar um projeto Express.js:

**Passo 1: Instale o Node.js e o npm:**
Se você ainda não possui o Node.js instalado, faça o download e instale a partir do site oficial (https://nodejs.org/). O npm (Node Package Manager) é incluído com o Node.js, portanto, você não precisa instalá-lo separadamente.

**Passo 2: Crie uma pasta para o seu projeto:**
Crie uma pasta onde deseja iniciar o projeto. Você pode criar uma nova pasta usando o comando `mkdir` no terminal ou usar um gerenciador de arquivos.

**Passo 3: Abra o terminal na pasta do projeto:**
Navegue até a pasta do projeto usando o terminal. Você pode usar o comando `cd` para fazer isso.

**Passo 4: Inicialize seu projeto Node.js:**
Execute o seguinte comando para criar um arquivo `package.json` para seu projeto. Isso permitirá que você rastreie as dependências do projeto e configure o ambiente.

```bash
npm init -y
```

**Passo 5: Instale o Express.js:**
Agora, você pode instalar o Express.js como uma dependência do seu projeto. Execute o seguinte comando:

```bash
npm install express --save
```
```bash
npm install express-handlebars --save
```
```bash
npm install body-parser --save
```
```bash
npm install --save mongoose
```
Isso instalará o Express.js e adicionará uma entrada no arquivo `package.json`.

**Passo 6: Crie seu arquivo de aplicativo Express:**
Crie um arquivo JavaScript para seu aplicativo Express. Você pode chamá-lo de `app.js` ou qualquer outro nome de sua escolha. Por exemplo:

```javascript
// Importe o módulo Express.js
const express = require('express');

// Crie uma instância do aplicativo Express
const app = express();

// Defina uma rota de exemplo
app.get('/', (req, res) => {
  res.send('Olá, Mundo!');
});

// Inicie o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor Express rodando na porta 3000');
});
```

**Passo 7: Execute seu aplicativo Express:**
Para executar seu aplicativo, use o seguinte comando na pasta do projeto:

```bash
node app.js
```

Se tudo estiver configurado corretamente, você verá a mensagem "Servidor Express rodando na porta 3000" no console. Seu aplicativo Express estará em execução em http://localhost:3000/.

A partir daqui, você pode começar a construir seu aplicativo Express adicionando rotas, middleware e configurando as dependências necessárias. Certifique-se de ler a documentação oficial do Express.js (https://expressjs.com/) para obter mais informações sobre como criar aplicativos web usando o Express.