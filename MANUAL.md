# MONGODB - MANUAL
## CONCEITO:
O MongoDB é um banco de dados NoSQL, ou seja, um banco de dados não relacional. Ele difere dos bancos de dados relacionais tradicionais, como o MySQL, por exemplo, em sua estrutura e funcionamento. O MongoDB armazena os dados em documentos no formato JSON, o que o torna muito flexível e escalável. Ele é frequentemente utilizado em aplicações modernas que lidam com grandes volumes de dados e que necessitam de uma estrutura de banco de dados altamente adaptável. 

## INSTALAÇÃO:
Você pode baixar o MongoDB diretamente do site oficial. Aqui está o link para a página de downloads:

[https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)

Certifique-se de selecionar a versão correta para o seu sistema operacional. Depois de baixar o instalador, siga as instruções de instalação para configurar o MongoDB em seu sistema.

## [MONGODB COMPASS](https://youtu.be/k9ZhV4k9ULI?si=RjgleCR1xuNfYX8s)
O MongoDB Compass é uma ferramenta gráfica de interface de usuário (GUI) para trabalhar com o MongoDB. Ele fornece uma maneira visual e intuitiva de interagir com seus bancos de dados MongoDB, permitindo que você execute operações como criar, modificar e excluir documentos, visualizar e otimizar consultas, criar índices e muito mais `(É como o PHPMYADMIN para o MySQL).`

Algumas das principais características do MongoDB Compass incluem:

1. **Visualização de Dados**: Permite visualizar e explorar seus dados MongoDB de forma gráfica e interativa, facilitando a compreensão da estrutura e do conteúdo de seus bancos de dados.

2. **Construtor de Consultas**: Oferece um construtor de consultas visual que permite criar consultas MongoDB complexas de forma fácil e intuitiva, mesmo para usuários sem conhecimento avançado de consulta.

3. **Validação de Esquema**: Ajuda a garantir a integridade dos dados por meio da validação de esquema, permitindo definir regras de validação para seus documentos MongoDB.

4. **Visualização de Desempenho**: Fornece ferramentas para analisar o desempenho de suas consultas e operações no MongoDB, ajudando a identificar áreas de melhoria e otimização.

5. **Gerenciamento de Índices**: Permite criar, modificar e excluir índices no MongoDB para melhorar o desempenho das consultas.

## MODO DE VISUALIZAÇÃO:
O MongoDB Compass oferece uma interface gráfica intuitiva e flexível que permite visualizar e interagir com seus dados de várias maneiras. 

- **JSON**: Visualização em formato JSON, que é a representação padrão dos documentos no MongoDB. É útil para ter uma visão detalhada de cada documento e seus campos.

- **Array**: Visualização em formato de array, que organiza os documentos em uma lista, facilitando a visualização de múltiplos documentos em um único conjunto.

- **Tabela**: Visualização em formato de tabela, que exibe os dados em linhas e colunas, tornando mais fácil comparar os valores dos campos entre diferentes documentos.

Essas opções de visualização oferecem flexibilidade para escolher o formato que melhor se adapta às suas necessidades e preferências de análise e manipulação de dados no MongoDB.

## COLLETION ~= TABELAS:
Sim, as coleções no MongoDB são análogas às tabelas em um banco de dados relacional, como o MySQL. No entanto, existem algumas diferenças importantes entre coleções no MongoDB e tabelas em um banco de dados relacional:

1. **Esquema flexível**: As coleções no MongoDB têm um esquema flexível, o que significa que os documentos em uma coleção não precisam ter a mesma estrutura. Cada documento pode ter campos diferentes e o esquema pode ser alterado dinamicamente.

2. **Sem esquema rígido**: Ao contrário das tabelas em bancos de dados relacionais, as coleções no MongoDB não têm um esquema rígido que defina a estrutura dos documentos. Isso oferece mais flexibilidade ao lidar com dados não estruturados ou semiestruturados.

3. **Documentos em vez de linhas**: Em vez de linhas como em uma tabela relacional, os dados são armazenados como documentos BSON (JSON binário) em uma coleção. Cada documento é uma estrutura de dados independente que pode conter campos e valores arbitrários.

4. **Sem suporte a transações em várias coleções**: Enquanto bancos de dados relacionais como o MySQL suportam transações ACID (Atomicidade, Consistência, Isolamento, Durabilidade) que podem abranger várias tabelas, o MongoDB oferece suporte a transações apenas em uma única coleção em uma única instância.

No geral, as coleções no MongoDB desempenham um papel semelhante ao das tabelas em bancos de dados relacionais, mas com algumas diferenças fundamentais devido à natureza flexível e sem esquema do MongoDB.

## MONGODB != MYSQL:

| MySQL                      | MongoDB                          |
|----------------------------|----------------------------------|
| Banco de dados            | Banco de dados                   |
| Tabelas                   | Coleções                         |
| Linhas                    | Documentos                       |
| Colunas                   | Campos                           |
| Chave primária            | Chave primária (\_id)            |
| Chave estrangeira         | Referência de documento aninhado |
| Índices                   | Índices                          |
| JOINs                     | Operações de agregação           |
| SQL (Structured Query Language) | Operações de consulta           |
| Transações                | Operações de transação           |
| ACID (Atomicidade, Consistência, Isolamento, Durabilidade) | ACID (geralmente apenas Atomicidade e Durabilidade) |
| Schema rígido             | Schema flexível                  |
| Normalização              | Denormalização                   |
| Relacionamento um-para-muitos | Referência de documento aninhado |
| Relacionamento muitos-para-muitos | Referências mútuas ou array de referências |
| Suporte a SQL completo    | Não utiliza SQL                  |


1. **Banco de dados**: Ambos o MySQL e o MongoDB são sistemas de gerenciamento de banco de dados (SGBD) que armazenam e gerenciam dados.

2. **Tabelas vs. Coleções**: No MySQL, os dados são organizados em tabelas, que consistem em linhas e colunas. No MongoDB, os dados são armazenados em coleções, que são conjuntos de documentos.

3. **Linhas vs. Documentos**: Em um banco de dados MySQL, cada linha representa um registro de dados individual dentro de uma tabela. No MongoDB, cada documento representa um registro de dados, e todos os dados relacionados são agrupados dentro desse documento.

4. **Colunas vs. Campos**: Em um banco de dados MySQL, as colunas representam os atributos individuais de um registro, enquanto no MongoDB, os campos são as chaves e valores dentro de um documento.

5. **Chave primária**: Tanto no MySQL quanto no MongoDB, é possível ter uma chave primária para identificar exclusivamente cada registro/documento. No MongoDB, por padrão, a chave primária é chamada de `_id`.

6. **Chave estrangeira**: No MySQL, as chaves estrangeiras são usadas para estabelecer relacionamentos entre tabelas. No MongoDB, os relacionamentos podem ser representados por referências de documento aninhadas (como um objeto dentro de outro objeto) ou por referências mútuas (um documento faz referência a outro por meio de um campo).

7. **Índices**: Tanto no MySQL quanto no MongoDB, índices podem ser criados para melhorar o desempenho das consultas. Eles ajudam a acelerar a pesquisa e recuperação de dados.

8. **JOINs vs. Operações de agregação**: No MySQL, os JOINs são usados para combinar dados de múltiplas tabelas em uma consulta. No MongoDB, as operações de agregação, como `$lookup`, são usadas para realizar operações semelhantes, onde dados de múltiplas coleções são combinados.

9. **SQL vs. Operações de consulta**: O MySQL utiliza a linguagem SQL (Structured Query Language) para realizar operações de consulta e manipulação de dados. No MongoDB, as consultas são feitas usando operadores específicos do MongoDB, como `$match`, `$group`, `$project`, entre outros.

10. **Transações e ACID**: O MySQL suporta transações ACID (Atomicidade, Consistência, Isolamento e Durabilidade) para garantir a integridade dos dados. O MongoDB geralmente suporta apenas Atomicidade e Durabilidade, embora a disponibilidade de transações tenha sido introduzida em versões mais recentes.

11. **Schema rígido vs. Schema flexível**: No MySQL, o esquema de uma tabela é rígido e requer a definição prévia das colunas e seus tipos de dados. No MongoDB, o esquema é flexível, permitindo que os documentos na mesma coleção tenham estruturas diferentes.

12. **Normalização vs. Denormalização**: No MySQL, a normalização é o processo de organizar os dados em tabelas para evitar a redundância e a dependência. No MongoDB, a denormalização é muitas vezes preferida, onde os dados são combinados em um único documento para otimizar o desempenho das consultas.

13. **Relacionamentos um-para-muitos vs. muitos-para-muitos**: No MySQL, os relacionamentos um-para-muitos são estabelecidos usando chaves estrangeiras. No MongoDB, isso pode ser feito por meio de referências de documento aninhadas (um documento dentro de outro) ou por referências mútuas (um documento referenciando outro por meio de um campo).

14. **Suporte a SQL completo**: Enquanto o MySQL suporta SQL completo, o MongoDB não utiliza SQL, em vez disso, usa uma interface baseada em JSON e operações específicas do MongoDB.

## DOCUMENTS JSON:
Quando você importa um arquivo JSON para o MongoDB usando a ferramenta `mongoimport`, cada objeto JSON no arquivo é considerado como um documento no banco de dados MongoDB. 

No exemplo que forneci, o arquivo [`ANIMAIS.json`](./ANIMAIS.json) continha uma matriz de quatro objetos JSON, cada um representando um animal diferente, com suas propriedades como nome, espécie, habitat e alimentação.

Quando você importa esse arquivo usando `mongoimport`, o MongoDB insere cada objeto JSON como um documento separado em sua coleção especificada. Portanto, como havia quatro objetos no arquivo JSON, quatro documentos foram criados na coleção do MongoDB. Cada documento agora representa um animal na sua coleção.

## COMANDOS:
Aqui estão alguns dos comandos básicos do MongoDB para criar e gerenciar bancos de dados e coleções, bem como realizar operações de consulta:

1. **Criar um banco de dados:**
   ```bash
   use nomedoBanco
   ```

2. **Criar uma coleção:**
   ```bash
   db.createCollection("nomeDaColecao")
   ```

3. **Inserir documento(s) em uma coleção:**
   ```bash
   db.nomeDaColecao.insert({ campo1: valor1, campo2: valor2 })
   ```

4. **Consultar documentos em uma coleção:**
   ```bash
   db.nomeDaColecao.find()
   ```

5. **Consultar com critérios (equivalente ao WHERE no MySQL):**
   ```bash
   db.nomeDaColecao.find({ campo: valor })
   ```

6. **Atualizar documento(s) em uma coleção:**
   ```bash
   db.nomeDaColecao.update({ campo: valor }, { $set: { novoCampo: novoValor } })
   ```

7. **Remover documento(s) em uma coleção:**
   ```bash
   db.nomeDaColecao.remove({ campo: valor })
   ```

8. **Remover uma coleção:**
   ```bash
   db.nomeDaColecao.drop()
   ```

9. **Remover um banco de dados:**
   ```bash
   use nomedoBanco
   db.dropDatabase()
   ```

10. **Índices:**
    ```bash
    db.nomeDaColecao.createIndex({ campo: 1 })
    ```

Estes são apenas alguns dos comandos básicos do MongoDB. A linguagem de consulta e os comandos do MongoDB são mais ricos e flexíveis, especialmente quando você lida com consultas mais avançadas e operações de agregação. Certifique-se de consultar a documentação oficial do MongoDB para uma referência completa e detalhada: [Documentação MongoDB](https://docs.mongodb.com/).

Lembre-se de que muitas dessas operações podem ser feitas de maneira mais detalhada e eficaz usando uma interface gráfica como o MongoDB Compass ou uma biblioteca de driver MongoDB na linguagem de programação de sua escolha.

