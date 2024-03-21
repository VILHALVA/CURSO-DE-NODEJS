# NODEJS - MANUAL
## INSTALAÇÃO:
1. **Acesse o site oficial do Node.js**: Visite o [site](https://nodejs.org/) e você encontrará o botão de download.

2. **Escolha a versão adequada**: O site deve detectar automaticamente o sistema operacional do seu computador e oferecer a versão recomendada do Node.js. Selecione a versão que melhor se adequa ao seu sistema operacional (Windows, macOS ou Linux).

3. **Faça o download do instalador**: Clique no botão de download para baixar o instalador do Node.js.

4. **Execute o instalador**: Após o download ser concluído, execute o arquivo do instalador. Isso iniciará o assistente de instalação.

5. **Siga as instruções do assistente de instalação**: O assistente de instalação irá guiá-lo através do processo de instalação. Geralmente, basta seguir as instruções na tela e aceitar as configurações padrão. Se desejar, você pode personalizar algumas opções durante o processo de instalação.

6. **Verifique a instalação**: Após a conclusão da instalação, você pode verificar se o Node.js foi instalado corretamente abrindo um terminal ou prompt de comando e digitando os seguintes comandos:

   Para verificar se o Node.js foi instalado corretamente, digite:
   ```
   node -v
   ```
   Isso deve exibir a versão do Node.js instalada.

   Para verificar se o npm (Node Package Manager) foi instalado corretamente, digite:
   ```
   npm -v
   ```
   Isso deve exibir a versão do npm instalada.

Se os comandos acima retornarem as versões corretas, então o Node.js foi instalado com sucesso em seu sistema.

Depois de instala-lo, você estará pronto para começar a desenvolver aplicativos usando Node.js e npm.

## DEPENDÊNCIAS:
1. **Inicialização do projeto com `npm init`**:
   - Abra um terminal ou prompt de comando.
   - Navegue até o diretório onde você deseja criar o seu projeto Node.js.
   - Execute o comando `npm init` e siga as instruções fornecidas. Isso criará um arquivo `package.json` no seu diretório. O `package.json` é onde você pode especificar as dependências do seu projeto e outras informações relevantes:
   ```bash
   npm init
   ```

2. **Instalando dependências com o npm**:
   - Depois de ter o `package.json` criado, você pode começar a instalar as dependências do seu projeto usando o npm. Por exemplo, se você quiser instalar o Express, um popular framework web para Node.js, você pode executar o comando:
     ```
     npm install express
     ```
   Isso instalará o Express no seu projeto e adicionará uma entrada para o Express no arquivo `package.json`, sob a lista de dependências.

3. **Gitignore para Node.js**:
   - Criar um arquivo `.gitignore` no diretório raiz do seu projeto é uma boa prática. Isso permite que você especifique arquivos e diretórios que o Git deve ignorar ao realizar commits, como a pasta `node_modules`, que geralmente é grande e contém as dependências instaladas do seu projeto. Você pode criar um arquivo `.gitignore` e adicionar o seguinte conteúdo:
     ```
     /node_modules
     ```
   Isso instrui o Git a ignorar a pasta `node_modules` e todos os seus conteúdos ao realizar commits.

4. **Instalando dependências listadas no `package.json`**:
   - Após clonar um repositório que contém um `package.json`, você pode instalar todas as dependências listadas executando o comando:
     ```
     npm install
     ```
   Isso lerá o `package.json` e instalará todas as dependências listadas no arquivo, garantindo que todas as bibliotecas necessárias para o projeto estejam presentes no seu ambiente de desenvolvimento.

Com esses passos, você terá configurado e inicializado um projeto Node.js, instalado dependências e configurado o `.gitignore` para excluir a pasta `node_modules` do controle de versão. Agora você pode começar a escrever código para o seu projeto Node.js.

## SUBINDO O SERVIDOR:
Ao iniciar um servidor Node.js, você pode optar por usar os comandos `node app.js` ou `nodemon app.js`. Aqui está a diferença entre os dois:

1. **`node app.js`**:
   - Quando você executa `node app.js`, o servidor Node.js é iniciado com o arquivo `app.js` especificado. Esse comando executa o script JavaScript uma vez e inicia o servidor. Se você fizer alguma alteração no código do seu aplicativo, será necessário parar o servidor manualmente (`Ctrl + C` no terminal) e reiniciá-lo novamente com o comando `node app.js`:
   ```bash
   node app.js
   ```

2. **`nodemon app.js`**:
   - O `nodemon` é uma ferramenta de desenvolvimento que monitora as alterações nos arquivos do seu projeto e reinicia automaticamente o servidor sempre que detecta uma modificação. Isso significa que você não precisa parar e iniciar manualmente o servidor toda vez que fizer uma alteração no código. Em vez disso, o `nodemon` cuida disso para você, o que é extremamente conveniente durante o desenvolvimento.
   - Para usar o `nodemon`, você precisa instalá-lo globalmente ou localmente no seu projeto usando o npm. Você pode instalar globalmente usando o seguinte comando:
     ```bash
     npm install -g nodemon
     ```
     Depois de instalado globalmente, você pode usar o comando `nodemon app.js` para iniciar o servidor:
     ```bash
     nodemon app.js
     ```

