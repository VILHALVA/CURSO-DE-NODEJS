# ERR_OSSL_EVP_UNSUPPORTED
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

## CONCEITO:
O erro "ERR_OSSL_EVP_UNSUPPORTED" geralmente ocorre devido a problemas de compatibilidade entre a versão do OpenSSL e a versão do Node.js ou outras dependências. Isso pode acontecer quando o Node.js é incapaz de usar um algoritmo de hash específico devido a restrições ou falta de suporte no OpenSSL.

Para corrigir esse erro, uma solução comum é configurar o Node.js para usar um provedor OpenSSL legado durante a construção ou execução do aplicativo. Isso é feito definindo a variável de ambiente `OPENSSL_CONF` para apontar para um arquivo de configuração OpenSSL adequado, que inclui as configurações para ativar o provedor legado.

Além disso, em alguns casos, pode ser necessário definir opções adicionais do Node.js, como `NODE_OPTIONS`, para garantir o uso do provedor OpenSSL legado durante a construção ou execução do aplicativo.

Essas configurações são necessárias para contornar problemas de compatibilidade com o Webpack ou outras dependências que podem estar causando o erro "ERR_OSSL_EVP_UNSUPPORTED".

## POSIVEIS CAUSAS:
1. **Versão desatualizada do OpenSSL**: Se a versão do OpenSSL usada pelo Node.js estiver desatualizada e não oferecer suporte a certos algoritmos de hash ou criptografia, isso pode causar o erro.

2. **Configuração incorreta do OpenSSL**: Configurações incorretas no arquivo de configuração do OpenSSL (openssl.cnf) podem levar a problemas de compatibilidade.

3. **Problemas de compatibilidade entre Node.js e Webpack**: Algumas versões do Webpack podem exigir configurações específicas de OpenSSL que não são compatíveis com a versão padrão do Node.js.

4. **Ambiente de desenvolvimento inconsistente**: Configurações de ambiente inconsistentes, como diferentes versões do Node.js ou do OpenSSL em ambientes de desenvolvimento e produção, podem causar problemas de compatibilidade.

5. **Dependências transitivas**: Dependências do projeto que usam internamente o Webpack podem introduzir problemas de compatibilidade com o OpenSSL, especialmente se estiverem desatualizadas ou não forem mantidas.

## SOLUÇÃO ORTODOXA:
Aqui estão algumas etapas que você pode tentar para resolver esse problema:

1. **Atualize o Node.js**: Verifique se você está usando uma versão recente do Node.js. Se você estiver em uma versão mais antiga, tente atualizar para a versão mais recente e veja se o problema persiste.

2. **Limpe o Cache do npm**: Às vezes, problemas podem surgir devido a pacotes corrompidos ou cache do npm. Tente limpar o cache do npm usando o comando `npm cache clean --force` e depois tente rodar o comando `npm run serve` novamente.

3. **Verifique as Dependências do Projeto**: Verifique se todas as dependências do seu projeto estão corretamente instaladas e atualizadas. Se houver algum problema com as dependências, pode causar erros durante a execução do servidor de desenvolvimento.

4. **Verifique as Configurações de Criptografia**: Se o problema persistir, pode haver algum problema relacionado à configuração de criptografia no seu ambiente. Tente pesquisar sobre o erro específico que você está recebendo para ver se há alguma solução específica para ele.

Se nenhuma das soluções acima resolver o problema, pode ser útil partir para `SOLUÇÃO GAMBIARRA`.

## SOLUÇÃO GAMBIARRA:
1. **Excluir a pasta `node_modules`**:
   - Se você está visualizando este tutorial, provavelmente encontrou um erro ao tentar executar o aplicativo. A primeira ação a ser tomada é excluir a pasta `node_modules`.

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
   Este comando instala todas as dependências listadas no arquivo `package.json` do seu projeto. Certifique-se de estar no diretório do seu projeto ao executar este comando.

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

     - **Angular:**
       ```bash
       ng serve
       ```
       
     - **React:**
       ```bash
       npm start
       ```

- [SAIBA MAIS](https://stackoverflow.com/questions/69394632/webpack-build-failing-with-err-ossl-evp-unsupported)