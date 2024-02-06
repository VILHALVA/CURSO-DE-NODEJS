# PROTOCOLO HTTP
## CONCEITO:
O Protocolo de Transferência de Hipertexto (HTTP), é um protocolo de comunicação utilizado na World Wide Web (Web) para transmitir dados, como páginas da web, imagens, vídeos, e outros recursos, entre um cliente (geralmente um navegador da web) e um servidor da web. O HTTP é fundamental para a navegação e interação na web e segue um modelo cliente-servidor.

Aqui estão alguns conceitos-chave relacionados ao HTTP:

1. **Cliente e Servidor:** O HTTP envolve duas partes principais: o cliente e o servidor. O cliente é o programa (como um navegador da web) que solicita recursos, enquanto o servidor é o programa que armazena e fornece esses recursos (geralmente páginas da web).

2. **Métodos HTTP:** Os métodos HTTP descrevem a ação a ser executada na solicitação. Os métodos mais comuns incluem:
   - `GET`: Solicita um recurso do servidor.
   - `POST`: Envia dados ao servidor, geralmente para criar algo novo.
   - `PUT`: Atualiza um recurso existente no servidor.
   - `DELETE`: Remove um recurso do servidor.

3. **URI (Uniform Resource Identifier):** Cada recurso na web é identificado por uma URI, que é uma sequência de caracteres que define sua localização e nome.

4. **Cabeçalhos HTTP:** Os cabeçalhos HTTP contêm informações adicionais sobre a solicitação ou a resposta. Eles podem incluir informações como o tipo de conteúdo, a data da última modificação e muito mais.

5. **Estado:** O HTTP é um protocolo sem estado, o que significa que cada solicitação é independente e não armazena informações sobre solicitações anteriores. No entanto, as sessões podem ser implementadas usando cookies e outros mecanismos.

6. **Respostas HTTP:** O servidor responde a solicitações HTTP com respostas. Cada resposta inclui um código de status que indica o resultado da solicitação. Alguns códigos de status comuns incluem 200 (OK), 404 (Não Encontrado) e 500 (Erro Interno do Servidor).

7. **Segurança:** O HTTP padrão não é seguro, o que significa que os dados transmitidos entre o cliente e o servidor podem ser interceptados por terceiros. Para garantir a segurança dos dados, é comum usar o HTTPS, que é uma versão segura do HTTP que usa criptografia SSL/TLS.

8. **Versões do Protocolo:** Existem várias versões do protocolo HTTP, sendo a mais comum o HTTP/1.1 e o HTTP/2. O HTTP/3 também está em desenvolvimento.

9. **RESTful API:** Muitos serviços da web seguem os princípios da arquitetura REST (Representational State Transfer), que usa os métodos HTTP para criar interfaces simples e eficientes para acesso a recursos.

O HTTP é essencial para a web moderna e é usado em uma variedade de aplicativos, desde a simples exibição de páginas da web até a comunicação entre aplicativos em serviços da web e APIs RESTful. É fundamental para a comunicação e troca de informações na internet.

## APP.JS:
O código feito é um exemplo simples de como criar um servidor web HTTP usando Node.js. Vou explicar linha por linha o que está acontecendo:

```javascript
var http = require('http');
```

A primeira linha de código está importando o módulo `http` do Node.js. Esse módulo é uma parte integrada do Node.js e fornece funcionalidades para criar servidores HTTP.

```javascript
http.createServer(function(req, res) {
    res.end("SEJA BEM VINDO! VOCÊ ESTÁ ACESSANDO O SERVIDOR NODEJS!");
}).listen(8081);
```

Aqui, estamos criando um servidor HTTP usando o método `createServer` do módulo `http`. Esse método recebe uma função de callback que é executada sempre que o servidor recebe uma solicitação HTTP.

- A função de callback tem dois parâmetros: `req` (Request) e `res` (Response). `req` contém informações sobre a solicitação feita pelo cliente, como URL, cabeçalhos, método HTTP, etc. `res` é usado para enviar uma resposta de volta ao cliente.

- Dentro da função de callback, estamos chamando `res.end()` para enviar a resposta de volta ao cliente. Neste caso, estamos enviando a mensagem "SEJA BEM VINDO! VOCÊ ESTÁ ACESSANDO O SERVIDOR NODEJS!" como resposta.

- Por fim, estamos chamando `listen(8081)` para fazer o servidor escutar na porta 8081. Isso significa que o servidor estará disponível para receber solicitações HTTP na porta 8081 do seu computador.

```javascript
console.log("O SERVIDOR ESTÁ RODANDO!");
```

A última linha imprime uma mensagem no console informando que o servidor está rodando. Essa mensagem será exibida no terminal quando você iniciar o servidor.

Resumindo, o código cria um servidor web simples que responde a todas as solicitações com a mensagem de boas-vindas "SEJA BEM VINDO! VOCÊ ESTÁ ACESSANDO O SERVIDOR NODEJS!" e faz com que o servidor escute na porta 8081. Quando você executa este código, o servidor estará pronto para atender solicitações HTTP e exibirá a mensagem no console para indicar que está em execução. Você pode acessar o servidor abrindo um navegador e digitando `http://localhost:8081` na barra de endereços.

## OBSERVAÇÃO:
Cada alteração que você fizer: Terá que fechar o servidor para a página ser atualizada. O comando no CMD é `ctl+c`. Após isso, abra o servidor novamente com:
```bash
node APP.js
```