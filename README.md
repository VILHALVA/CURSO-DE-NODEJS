# CURSO DE NODEJS
👨‍⚖️NODEJS É UM SOFTWARE QUE PERMITE A EXECUÇÃO DO CÓDIGO JAVASCRIPT FORA DO NAVEGADOR WEB.

<img src="FOTO.png" align="center" width="400"> <br>

## CONCEITO:
Node.js é um ambiente de tempo de execução de JavaScript que permite aos desenvolvedores criar aplicativos de rede escaláveis e de alto desempenho. Aqui está o conceito básico por trás do Node.js:

1. **Ambiente de Tempo de Execução**:
   - Node.js é um ambiente de tempo de execução de JavaScript construído sobre o motor V8 JavaScript da Google, o mesmo motor utilizado pelo navegador Google Chrome.
   - Ele permite que os desenvolvedores executem JavaScript no servidor, o que anteriormente era restrito ao navegador.

2. **Event-Driven e Non-Blocking I/O**:
   - Node.js é construído em torno de um modelo de programação assíncrono e orientado a eventos.
   - Isso significa que em vez de bloquear a execução de operações de entrada/saída (I/O), como leitura de arquivos ou solicitações de rede, o Node.js continua a executar outras operações e processa as I/O de forma assíncrona.

3. **Single-Threaded e Event Loop**:
   - Node.js opera em um modelo single-threaded com loop de eventos. Isso significa que todas as operações são executadas em um único thread, mas o Node.js é capaz de lidar com várias conexões simultâneas devido ao modelo de programação assíncrono.
   - O event loop é responsável por gerenciar eventos, como solicitações de entrada/saída, timers e callbacks, e garante que as operações sejam executadas de forma eficiente e sem bloqueios.

4. **Módulos e Ecossistema**:
   - Node.js possui um sistema de módulos incorporado que permite aos desenvolvedores modularizar seu código e reutilizar funcionalidades facilmente.
   - Além disso, o ecossistema do Node.js é rico e vibrante, com milhares de pacotes disponíveis no npm (Node Package Manager), o maior registro de pacotes de código aberto do mundo.

5. **Aplicações de Rede e Servidor Web**:
   - Devido à sua eficiência em operações de rede, Node.js é frequentemente usado para construir aplicativos de rede, como servidores web, APIs RESTful, servidores de jogos em tempo real, aplicativos de bate-papo e muito mais.
   - Sua capacidade de lidar com muitas conexões simultâneas e operações de E/S assíncronas o torna uma escolha popular para aplicativos de alto tráfego e escaláveis.

## SUA HISTÓRIA:
1. **Origens (2009)**:
   - Node.js foi oficialmente lançado por Ryan Dahl em 2009, como um projeto de código aberto hospedado no GitHub.
   - A motivação para a criação do Node.js foi resolver o problema de escalabilidade e desempenho encontrado em servidores web tradicionais, onde operações de entrada/saída bloqueantes podem levar a problemas de desempenho.

2. **Baseado no V8 JavaScript Engine**:
   - Node.js é construído sobre o V8 JavaScript Engine, o mesmo motor JavaScript de alto desempenho desenvolvido pela Google para o navegador Chrome.
   - Isso permitiu que o Node.js executasse código JavaScript de forma rápida e eficiente no servidor.

3. **Modelo Assíncrono e Event-Driven**:
   - Uma das características mais marcantes do Node.js é o seu modelo de programação assíncrono e orientado a eventos.
   - Isso permite que o Node.js lide com muitas conexões simultâneas de forma eficiente, sem bloquear a execução do código.

4. **Rápida Adoção e Popularização**:
   - Node.js ganhou popularidade rapidamente entre os desenvolvedores devido à sua eficiência, escalabilidade e facilidade de uso.
   - Empresas como LinkedIn, Netflix, Uber e PayPal adotaram o Node.js para seus aplicativos devido aos seus benefícios de desempenho e produtividade.

5. **Lançamento de npm e Ecossistema Vibrante**:
   - Em 2011, o npm (Node Package Manager) foi lançado, oferecendo um vasto ecossistema de pacotes e bibliotecas para os desenvolvedores Node.js.
   - Isso permitiu que os desenvolvedores compartilhassem código e reutilizassem funcionalidades facilmente, acelerando o desenvolvimento de aplicativos.

6. **Expansão para Diferentes Domínios**:
   - Node.js expandiu além de servidores web para uma variedade de domínios, incluindo desenvolvimento de APIs RESTful, aplicativos em tempo real, ferramentas de linha de comando e até mesmo desktop e aplicativos móveis.

7. **Desenvolvimento Ativo e Evolução Contínua**:
   - Node.js é um projeto de código aberto com uma comunidade de desenvolvedores ativa e uma equipe central de mantenedores.
   - Novas versões são lançadas regularmente, trazendo novos recursos, melhorias de desempenho e correções de bugs.

## CARACTERÍSTICAS
### POSITIVAS:
- **JavaScript no Lado do Servidor:** Node.js permite a execução de JavaScript no lado do servidor, unificando o desenvolvimento de aplicações web no lado do cliente e no lado do servidor.

- **Assíncrono e Orientado a Eventos:** Utiliza uma arquitetura assíncrona e orientada a eventos, permitindo a manipulação eficiente de muitas conexões simultâneas.

- **Módulos Nativos e Terceiros:** Possui um vasto ecossistema de módulos nativos e de terceiros disponíveis por meio do npm (Node Package Manager), facilitando o desenvolvimento e a expansão de funcionalidades.

- **Escalabilidade Horizontal:** É conhecido por sua capacidade de escalabilidade horizontal, sendo eficiente na manipulação de um grande número de solicitações simultâneas.

- **Desenvolvimento Rápido:** Oferece um ciclo de desenvolvimento rápido, permitindo a atualização e visualização instantânea de alterações sem a necessidade de reiniciar o servidor.

- **Suporte a Plataformas Diversas:** Node.js é multiplataforma e pode ser executado em diversos sistemas operacionais, incluindo Windows, macOS e Linux.

### NEGATIVAS:
- **Callback Hell:** A utilização excessiva de callbacks pode levar a uma estrutura de código complexa conhecida como "Callback Hell" em projetos maiores.

- **Single Thread:** Apesar de sua eficiência assíncrona, Node.js é single-threaded, o que pode tornar o processamento de operações intensivas em CPU menos eficiente.

- **Maturidade de Algumas Bibliotecas:** Algumas bibliotecas podem ser menos maduras ou menos estáveis em comparação com tecnologias mais estabelecidas em outras linguagens.

- **Necessidade de Gestão de Dependências:** A gestão de dependências no ecossistema Node.js pode se tornar complexa, especialmente em projetos com muitas dependências ou em ambientes de produção.

- **Não é Adequado para Tarefas Síncronas Pesadas:** Devido à sua natureza assíncrona, Node.js pode não ser a escolha ideal para tarefas síncronas pesadas ou processamento de longa duração.

- **Incompatibilidade com Código Síncrono:** O uso excessivo de código síncrono pode prejudicar o desempenho global do servidor Node.js, exigindo uma abordagem cuidadosa para evitar gargalos.

## SUBSIDIOS:
- [CURSO CRIADO PELO "VICTOR LIMA - CIÊNCIA DA COMPUTAÇÃO"](https://www.youtube.com/playlist?list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B)
- [CURSO FEITO PELO VILHALVA](https://github.com/VILHALVA)
- [VEJA A DOCUMENTAÇÃO](https://nodejs.org/docs/latest/api/)
- [LINGUAGEM DE PROGRAMAÇÃO](https://github.com/VILHALVA/CURSO-DE-JAVASCRIPT)
- [VEJA A SINTAXE](./SINTAXE.md)
