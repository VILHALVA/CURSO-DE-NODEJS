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

## SOBRE O `package.json` E `package-lock.json`:
## CONCEITO:
O `package.json` é um arquivo que contém metadados sobre o projeto e suas dependências. Ele é usado pelo Node.js e pelo npm (Node Package Manager) para gerenciar pacotes e suas versões. Algumas das informações típicas encontradas no `package.json` incluem:

## ESTRUTURA:
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

## PRINCIPAIS CAMPOS:
1. **`name`**: O nome do projeto.
2. **`version`**: A versão atual do projeto seguindo o esquema de versionamento semântico (semver).
3. **`description`**: Uma breve descrição do que o projeto faz.
4. **`main`**: O ponto de entrada principal do projeto (geralmente um arquivo JavaScript).
5. **`scripts`**: Um conjunto de scripts que você pode executar usando `npm run <script>`. Por exemplo, `npm start` executará o comando definido em `start`.
6. **`dependencies`**: As dependências necessárias para o funcionamento do projeto em produção.
7. **`devDependencies`**: Dependências usadas apenas em ambiente de desenvolvimento (ex: `nodemon`).
8. **`author`**: O nome do autor do projeto.
9. **`license`**: O tipo de licença do projeto (por exemplo, MIT, ISC).

## O CONCEITO DE `package-lock.json`:
O `package-lock.json` é um arquivo gerado automaticamente pelo npm quando as dependências são instaladas. Ele garante que as mesmas versões das dependências sejam instaladas em qualquer máquina, independentemente de atualizações ou alterações em pacotes publicados.

## DIFERENÇAS ENTRE `package.json` E `package-lock.json`:
- **Finalidade**:
  - **`package.json`**: Serve como um manifesto do projeto, definindo quais pacotes são necessários e suas versões aproximadas.
  - **`package-lock.json`**: Documenta as versões exatas dos pacotes instalados, garantindo que a mesma versão seja instalada em todas as máquinas e ambientes.

- **Atualizações**:
  - **`package.json`**: Especifica as versões mínimas das dependências, permitindo atualizações dentro de um intervalo definido (por exemplo, `"express": "^4.17.1"` pode instalar qualquer versão 4.x.x).
  - **`package-lock.json`**: Trava as versões exatas que foram instaladas, não permitindo mudanças sem a atualização explícita deste arquivo.

- **Gerenciamento**:
  - **`package.json`**: Deve ser gerenciado manualmente e modificado conforme necessário.
  - **`package-lock.json`**: Gerenciado automaticamente pelo npm e não deve ser editado manualmente.

## TRABALHANDO COM MÚLTIPLAS VERSÕES DO NODE.JS:
### USANDO NVM:
**NVM (Node Version Manager)** é uma ferramenta útil para instalar e gerenciar várias versões do Node.js em um único sistema. Isso é especialmente útil para desenvolvedores que precisam trabalhar em diferentes projetos que requerem diferentes versões do Node.js. A seguir, está um guia passo a passo para instalar e usar o NVM.

#### 1. INSTALAÇÃO:
##### NO LINUX/MACOS:
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

##### NO WINDOWS:
1. **Baixar e instalar o NVM para Windows:**
   Acesse o [repositório do NVM para Windows](https://github.com/coreybutler/nvm-windows/releases) e baixe o instalador mais recente (`nvm-setup.zip`). Extraia o conteúdo e execute o instalador.

#### 2. USAR NVM:
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

