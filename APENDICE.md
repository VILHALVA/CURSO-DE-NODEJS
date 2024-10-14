# APÊNDICE
## COMANDOS DO NPM (NODE PACKAGE MANAGER):
1. **`npm init`**
   - **Descrição:** Inicia um novo projeto Node.js, criando um arquivo `package.json` que irá conter informações sobre o projeto e suas dependências.
   - **Uso:** 
     ```bash
     npm init
     ```

2. **`npm init -y`**
   - **Descrição:** Cria um arquivo `package.json` com as configurações padrão, evitando a necessidade de responder às perguntas interativas.
   - **Uso:**
     ```bash
     npm init -y
     ```

3. **`npm install`**
   - **Descrição:** Instala todas as dependências listadas no arquivo `package.json`. Se o arquivo `package-lock.json` estiver presente, o `npm` usará esse arquivo para instalar as versões exatas das dependências.
   - **Uso:**
     ```bash
     npm install
     ```

4. **`npm install <package>`**
   - **Descrição:** Instala um pacote específico e adiciona-o às dependências do projeto.
   - **Uso:**
     ```bash
     npm install <package>
     ```
   - **Exemplo:**
     ```bash
     npm install express
     ```

5. **`npm install <package> --save`**
   - **Descrição:** Instala um pacote específico e adiciona-o às dependências (`dependencies`) no `package.json`. Este comando é equivalente ao `npm install <package>` nas versões mais recentes do NPM.
   - **Uso:**
     ```bash
     npm install <package> --save
     ```

6. **`npm install <package> --save-dev`**
   - **Descrição:** Instala um pacote específico e adiciona-o às dependências de desenvolvimento (`devDependencies`) no `package.json`.
   - **Uso:**
     ```bash
     npm install <package> --save-dev
     ```

7. **`npm start`**
   - **Descrição:** Inicia um aplicativo Node.js. Esse comando geralmente é usado para iniciar o servidor ou a aplicação e executa o script definido como `start` no arquivo `package.json`.
   - **Uso:**
     ```bash
     npm start
     ```

8. **`npm run <script>`**
   - **Descrição:** Executa um script definido no `package.json` na seção `scripts`.
   - **Uso:**
     ```bash
     npm run <script>
     ```
   - **Exemplo:**
     ```bash
     npm run build
     ```

9. **`npm test`**
   - **Descrição:** Executa o script de teste definido no `package.json`.
   - **Uso:**
     ```bash
     npm test
     ```

10. **`npm uninstall <package>`**
    - **Descrição:** Remove um pacote instalado e o remove do `package.json`.
    - **Uso:**
      ```bash
      npm uninstall <package>
      ```

11. **`npm update`**
    - **Descrição:** Atualiza todos os pacotes para suas versões mais recentes compatíveis, de acordo com as restrições de versão definidas no `package.json`.
    - **Uso:**
      ```bash
      npm update
      ```

12. **`npm outdated`**
    - **Descrição:** Verifica se há pacotes desatualizados em seu projeto.
    - **Uso:**
      ```bash
      npm outdated
      ```

Esses são alguns dos comandos mais usados no dia a dia ao trabalhar com Node.js e NPM. [CLIQUE AQUI PARA SABER MAIS](https://meneguite.com/2021/07/05/principais-comandos-do-npm/).

---

## SOBRE O `package.json` E `package-lock.json`:
### CONCEITO:
O `package.json` é um arquivo que contém metadados sobre o projeto e suas dependências. Ele é usado pelo Node.js e pelo npm (Node Package Manager) para gerenciar pacotes e suas versões. Algumas das informações típicas encontradas no `package.json` incluem:

### ESTRUTURA:
```json
{
  "name": "nome-do-projeto",
  "version": "1.0.0",
  "description": "Uma breve descrição do projeto",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    "express": "^4.17.1",
    "mongoose": "^5.10.9"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  },
  "author": "Seu Nome",
  "license": "ISC"
}
```

### PRINCIPAIS CAMPOS:
1. **`name`**: O nome do projeto.
2. **`version`**: A versão atual do projeto seguindo o esquema de versionamento semântico (semver).
3. **`description`**: Uma breve descrição do que o projeto faz.
4. **`main`**: O ponto de entrada principal do projeto (geralmente um arquivo JavaScript).
5. **`scripts`**: Um conjunto de scripts que você pode executar usando `npm run <script>`. Por exemplo, `npm start` executará o comando definido em `start`.
6. **`dependencies`**: As dependências necessárias para o funcionamento do projeto em produção.
7. **`devDependencies`**: Dependências usadas apenas em ambiente de desenvolvimento (ex: `nodemon`).
8. **`author`**: O nome do autor do projeto.
9. **`license`**: O tipo de licença do projeto (por exemplo, MIT, ISC).

### O CONCEITO DE `package-lock.json`:
O `package-lock.json` é um arquivo gerado automaticamente pelo npm quando as dependências são instaladas. Ele garante que as mesmas versões das dependências sejam instaladas em qualquer máquina, independentemente de atualizações ou alterações em pacotes publicados.

### DIFERENÇAS ENTRE `package.json` E `package-lock.json`:
- **Finalidade**:
  - **`package.json`**: Serve como um manifesto do projeto, definindo quais pacotes são necessários e suas versões aproximadas.
  - **`package-lock.json`**: Documenta as versões exatas dos pacotes instalados, garantindo que a mesma versão seja instalada em todas as máquinas e ambientes.

- **Atualizações**:
  - **`package.json`**: Especifica as versões mínimas das dependências, permitindo atualizações dentro de um intervalo definido (por exemplo, `"express": "^4.17.1"` pode instalar qualquer versão 4.x.x).
  - **`package-lock.json`**: Trava as versões exatas que foram instaladas, não permitindo mudanças sem a atualização explícita deste arquivo.

- **Gerenciamento**:
  - **`package.json`**: Deve ser gerenciado manualmente e modificado conforme necessário.
  - **`package-lock.json`**: Gerenciado automaticamente pelo npm e não deve ser editado manualmente.

---

## TRABALHANDO COM MÚLTIPLAS VERSÕES DO NODE.JS:
### USANDO NVM:
**NVM (Node Version Manager)** é uma ferramenta útil para instalar e gerenciar várias versões do Node.js em um único sistema. Isso é especialmente útil para desenvolvedores que precisam trabalhar em diferentes projetos que requerem diferentes versões do Node.js. A seguir, está um guia passo a passo para instalar e usar o NVM.

### 1. INSTALAÇÃO:
#### NO LINUX/MACOS:
1. **Baixar e instalar o NVM:**
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
   ```

2. **Adicionar NVM ao seu shell:**
   Adicione as seguintes linhas ao seu arquivo `~/.bashrc`, `~/.zshrc`, `~/.profile`, ou `~/.bash_profile` (dependendo do seu shell):
   ```bash
   export NVM_DIR="$HOME/.nvm"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
   [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion
   ```

3. **Reiniciar o terminal ou recarregar o arquivo de configuração do shell:**
   ```bash
   source ~/.bashrc
   ```

#### NO WINDOWS:
1. **Baixar e instalar o NVM para Windows:**
   Acesse o [repositório do NVM para Windows](https://github.com/coreybutler/nvm-windows/releases) e baixe o instalador mais recente (`nvm-setup.zip`). Extraia o conteúdo e execute o instalador.

### 2. USAR NVM:
1. **Verificar a instalação do NVM:**
   ```bash
   nvm --version
   ```

2. **Listar todas as versões disponíveis do Node.js:**
   ```bash
   nvm ls-remote
   ```

3. **Instalar uma versão específica do Node.js:**
   ```bash
   nvm install <version>
   ```
   Por exemplo, para instalar a versão 14.17.0:
   ```bash
   nvm install 14.17.0
   ```

4. **Usar uma versão específica do Node.js:**
   ```bash
   nvm use <version>
   ```
   Por exemplo, para usar a versão 14.17.0:
   ```bash
   nvm use 14.17.0
   ```

5. **Definir uma versão padrão do Node.js:**
   ```bash
   nvm alias default <version>
   ```
   Por exemplo, para definir a versão 14.17.0 como padrão:
   ```bash
   nvm alias default 14.17.0
   ```

6. **Listar todas as versões instaladas do Node.js:**
   ```bash
   nvm ls
   ```

7. **Desinstalar uma versão específica do Node.js:**
   ```bash
   nvm uninstall <version>
   ```

### USANDO O VOLTA:
**Volta** é outra ferramenta para gerenciar versões de Node.js e NPM. É conhecida por ser rápida e fácil de usar, com foco em fornecer uma experiência de desenvolvimento suave. Aqui estão os passos para instalar e usar Volta:

#### INSTALAÇÃO:
##### NO LINUX/MACOS:
1. **Baixar e instalar o Volta:**
   ```bash
   curl https://get.volta.sh | bash
   ```

2. **Adicionar Volta ao seu shell:**
   Se o script de instalação não o fez automaticamente, adicione as seguintes linhas ao seu arquivo de configuração do shell (`~/.bashrc`, `~/.zshrc`, etc.):
   ```bash
   export VOLTA_HOME="$HOME/.volta"
   export PATH="$VOLTA_HOME/bin:$PATH"
   ```

3. **Reiniciar o terminal ou recarregar o arquivo de configuração do shell:**
   ```bash
   source ~/.bashrc
   ```

##### NO WINDOWS:
1. **Baixar e instalar o Volta para Windows:**
   Acesse o [site oficial do Volta](https://volta.sh) e baixe o instalador. Siga as instruções do instalador para completar a instalação.

#### USANDO O VOLTA:
1. **Verificar a instalação do Volta:**
   ```bash
   volta --version
   ```

2. **Instalar uma versão específica do Node.js:**
   ```bash
   volta install node@<version>
   ```
   Por exemplo, para instalar a versão 14.17.0:
   ```bash
   volta install node@14.17.0
   ```

3. **Definir uma versão padrão do Node.js:**
   ```bash
   volta pin node@<version>
   ```
   Por exemplo, para definir a versão 14.17.0 como padrão:
   ```bash
   volta pin node@14.17.0
   ```

4. **Instalar o NPM:**
   Volta instala automaticamente o NPM associado com a versão do Node.js, mas você também pode instalar uma versão específica:
   ```bash
   volta install npm@<version>
   ```

5. **Definir uma versão padrão do NPM:**
   ```bash
   volta pin npm@<version>
   ```

6. **Trocar para uma versão específica do Node.js temporariamente:**
   ```bash
   volta run node@<version> -- <command>
   ```
   Por exemplo, para usar a versão 12.18.3 do Node.js temporariamente:
   ```bash
   volta run node@12.18.3 -- node -v
   ```

7. **Verificar as ferramentas instaladas:**
   ```bash
   volta list
   ```

**Volta** oferece uma experiência simplificada e otimizada para gerenciar versões de Node.js e NPM, tornando-o uma alternativa interessante ao NVM. Sua instalação e uso são diretos, permitindo que desenvolvedores se concentrem no código em vez de gerenciar ambientes.

Usar o NVM ou VOLTA é uma prática recomendada para desenvolvedores que precisam alternar entre diferentes versões do Node.js. Isso facilita a manutenção de projetos legados e a experimentação com novas versões do Node.js sem afetar o ambiente de desenvolvimento existente.

---

## [ERR_OSSL_EVP_UNSUPPORTED](https://www.google.com/search?q=ERR_OSSL_EVP_UNSUPPORTED&rlz=1C1AVFC_enBR1025BR1025&oq=ERR_OSSL_EVP_UNSUPPORTED&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIGCAcQRRg90gEHNTcxajBqN6gCCLACAQ&sourceid=chrome&ie=UTF-8)

```
(node:1234) ERR_OSSL_EVP_UNSUPPORTED: Unsupported hash algorithm
    at Hash.getHash (/caminho/para/o/projeto/node_modules/hash.js/hash.js:43:15)
    at Hash.algorithm (/caminho/para/o/projeto/node_modules/hash.js/hash.js:52:21)
    at Object.createHash (/caminho/para/o/projeto/node_modules/create-hash/browser.js:140:10)
    at Object.crypto.createHash (/caminho/para/o/projeto/node_modules/webpack-crypto-md4-plugin/index.js:50:24)
    at /caminho/para/o/projeto/node_modules/webpack/lib/Compilation.js:537:39
    at Hook.eval [as callAsync] (eval at create (/caminho/para/o/projeto/node_modules/webpack/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)
    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/caminho/para/o/projeto/node_modules/webpack/node_modules/tapable/lib/Hook.js:18:14)
    at Compiler.compile (/caminho/para/o/projeto/node_modules/webpack/lib/Compiler.js:482:31)
    at /caminho/para/o/projeto/node_modules/webpack/lib/watchpack.js:63:18
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/caminho/para/o/projeto/node_modules/webpack/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)
(node:1234) [DEP_WEBPACK_COMPILATION_HASH] DeprecationWarning: the 'compilation' argument is deprecated and will be removed. Use 'compilation.hash' instead.
(node:1234) [DEP_WEBPACK_MODULE_COMPILATION] DeprecationWarning: The compilation argument of NormalModuleFactory.getCompilationHooks is deprecated. Use compilation.hooks.normalModule instead.

    node_modules/babel-loader/lib/index.js:59:71
{
    opensslErrorStack: [
        'error: 03000086: digital envelope routines::initialization error'
    ],
    library: 'digital envelope routines',
    reason: 'unsupported',
    code: 'ERR_OSSL_EVP_UNSUPPORTED'
}
```

### [CONCEITO:](https://cursos.alura.com.br/forum/topico-erro-ao-iniciar-o-projeto-err_ossl_evp_unsupported-343715)
O erro "ERR_OSSL_EVP_UNSUPPORTED" geralmente ocorre devido a problemas de compatibilidade entre a versão do OpenSSL e a versão do Node.js ou outras dependências. Isso pode acontecer quando o Node.js é incapaz de usar um algoritmo de hash específico devido a restrições ou falta de suporte no OpenSSL.

Para corrigir esse erro, uma solução comum é configurar o Node.js para usar um provedor OpenSSL legado durante a construção ou execução do aplicativo. Isso é feito definindo a variável de ambiente `OPENSSL_CONF` para apontar para um arquivo de configuração OpenSSL adequado, que inclui as configurações para ativar o provedor legado.

Além disso, em alguns casos, pode ser necessário definir opções adicionais do Node.js, como `NODE_OPTIONS`, para garantir o uso do provedor OpenSSL legado durante a construção ou execução do aplicativo.

Essas configurações são necessárias para contornar problemas de compatibilidade com o Webpack ou outras dependências que podem estar causando o erro "ERR_OSSL_EVP_UNSUPPORTED".

### [POSIVEIS CAUSAS:](https://www.2hatslogic.com/blog/troubleshooting_err_ossl/)
1. **Versão desatualizada do OpenSSL**: Se a versão do OpenSSL usada pelo Node.js estiver desatualizada e não oferecer suporte a certos algoritmos de hash ou criptografia, isso pode causar o erro.

2. **Configuração incorreta do OpenSSL**: Configurações incorretas no arquivo de configuração do OpenSSL (openssl.cnf) podem levar a problemas de compatibilidade.

3. **Problemas de compatibilidade entre Node.js e Webpack**: Algumas versões do Webpack podem exigir configurações específicas de OpenSSL que não são compatíveis com a versão padrão do Node.js.

4. **Ambiente de desenvolvimento inconsistente**: Configurações de ambiente inconsistentes, como diferentes versões do Node.js ou do OpenSSL em ambientes de desenvolvimento e produção, podem causar problemas de compatibilidade.

5. **Dependências transitivas**: Dependências do projeto que usam internamente o Webpack podem introduzir problemas de compatibilidade com o OpenSSL, especialmente se estiverem desatualizadas ou não forem mantidas.

### [SOLUÇÃO ORTODOXA:](https://kinsta.com/pt/base-de-conhecimento/err_ossl_evp_unsupported/)
Aqui estão algumas etapas que você pode tentar para resolver esse problema:

1. **Atualize o Node.js**: Verifique se você está usando uma versão recente do Node.js. Se você estiver em uma versão mais antiga, tente atualizar para a versão mais recente e veja se o problema persiste.

2. **Limpe o Cache do npm**: Às vezes, problemas podem surgir devido a pacotes corrompidos ou cache do npm. Tente limpar o cache do npm usando o comando `npm cache clean --force` e depois tente rodar o comando `npm run serve` novamente.

3. **Verifique as Dependências do Projeto**: Verifique se todas as dependências do seu projeto estão corretamente instaladas e atualizadas. Se houver algum problema com as dependências, pode causar erros durante a execução do servidor de desenvolvimento.

4. **Verifique as Configurações de Criptografia**: Se o problema persistir, pode haver algum problema relacionado à configuração de criptografia no seu ambiente. Tente pesquisar sobre o erro específico que você está recebendo para ver se há alguma solução específica para ele.

Se nenhuma das soluções acima resolver o problema, pode ser útil partir para `SOLUÇÃO GAMBIARRA`.

### [SOLUÇÃO GAMBIARRA:](https://stackoverflow.com/questions/69394632/webpack-build-failing-with-err-ossl-evp-unsupported)
1. **Excluir a pasta `node_modules`**:
   - Se você chegou até aqui, é porque a "SOLUÇÃO ORTODOXA" não resolveu o problema. A primeira ação a ser tomada é excluir a pasta `node_modules`.

2. **Criando o arquivo `openssl.cnf`:**
    - Na pasta raiz do seu projeto, crie o arquivo `openssl.cnf` e adicione o seguinte conteúdo nele:
    ```bash
    openssl_conf = openssl_init

    [openssl_init]
    providers = provider_sect

    [provider_sect]
    default = default_sect
    legacy = legacy_sect

    [default_sect]
    activate = 1

    [legacy_sect]
    activate = 1
    ```

3. **Configurando a variável de ambiente OPENSSL_CONF**:
   - Execute o seguinte comando para definir o caminho absoluto do arquivo `openssl.cnf`:

   **Windows:**
     ```cmd
     set OPENSSL_CONF=C:\Caminho\Para\Seu\Arquivo\openssl.cnf
     ```

    **Linux/MAC:**
     ```bash
     export OPENSSL_CONF=/Caminho/Para/Seu/Arquivo/openssl.cnf
     ```

   Substitua `C:\Caminho\Para\Seu\Arquivo\openssl.cnf` pelo caminho completo para o seu arquivo `openssl.cnf`. Este comando é necessário para garantir que o OpenSSL utilize as configurações corretas durante a construção ou execução do seu aplicativo.

   - Se o arquivo `openssl.cnf` estiver no mesmo diretório onde você está executando o prompt de comando, você pode simplesmente fazer:

   **Windows:**
     ```cmd
     set OPENSSL_CONF=openssl.cnf
     ```

    **Linux/MAC:**
     ```bash
     NODE_OPTIONS=--openssl-legacy-provider npm run build
     ```

4. **Instalando as dependências do projeto**:
   - Na pasta raiz do seu projeto, execute o comando:
     ```bash
     npm install
     ```
   Este comando instala todas as dependências listadas no arquivo `package.json` do seu projeto. 

5. **Configurando as opções do Node.js para usar o provedor OpenSSL legado**:
   - Execute o seguinte comando:

   **Windows:**
     ```cmd
     set NODE_OPTIONS=--openssl-legacy-provider && npm run build
     ```

    **Linux/MAC:**
     ```bash
     NODE_OPTIONS=--openssl-legacy-provider npm run build
     ```
   Este comando temporariamente define as opções do Node.js para utilizar o provedor OpenSSL legado durante a construção do seu aplicativo. Isso é necessário para contornar problemas de compatibilidade com o Webpack.

6. **Executar o aplicativo:**
   - Por fim, basta executar o aplicativo novamente. Aqui estão os comandos para iniciar o servidor local, dependendo do framework utilizado:

    - [**ANGULAR:**](https://github.com/VILHALVA/CURSO-DE-ANGULAR)
      ```bash
      ng serve
      ```

    - [**REACT:**](https://github.com/VILHALVA/CURSO-DE-REACT)
      ```bash
      npm start
      ```

    - [**VUEJS:**](https://github.com/VILHALVA/CURSO-DE-VUEJS)
       ```bash
       npm run serve
       ```

    - [**EXPRESSJS/NODEJS:**](https://github.com/VILHALVA/CURSO-DE-EXPRESSJS)
       ```bash
       node app.js
       ```
       
    - [**EMBERJS:**](https://github.com/VILHALVA/CURSO-DE-EMBERJS)
       ```bash
       npm start
       ```
    - [**METEORJS:**](https://github.com/VILHALVA/CURSO-DE-METEORJS)
       ```bash
       meteor
       ```
    - [**SVELTE:**](https://github.com/VILHALVA/CURSO-DE-SVELTE)
       ```bash
       npm run dev
       ```



