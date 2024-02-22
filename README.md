# CURSO DE MONGODB
👨‍⚖️MONGODB É UM BANCO DE DADOS NOSQL ORIENTADO A DOCUMENTOS, QUE OFERECE ALTA FLEXIBILIDADE E ESCALABILIDADE PARA ARMAZENAMENTO E RECUPERAÇÃO DE DADOS.

<img src="FOTO.png" align="center" width="400"> <br>

## CONCEITO:
O MongoDB é um sistema de gerenciamento de banco de dados NoSQL (não relacional) que armazena dados em um formato de documento flexível, conhecido como BSON (Binary JSON). Ele difere dos bancos de dados relacionais tradicionais, como o MySQL ou o PostgreSQL, em sua estrutura de armazenamento e modelagem de dados.

Aqui estão alguns conceitos-chave relacionados ao MongoDB:

1. **Documentos:** No MongoDB, os dados são armazenados em documentos BSON, que são estruturas semelhantes a JSON. Cada documento contém pares chave-valor que representam os dados. Os documentos podem variar em estrutura e não precisam seguir um esquema fixo. Isso oferece grande flexibilidade para modelar dados complexos.

2. **Coleções:** Os documentos são organizados em coleções, que são análogas às tabelas em bancos de dados relacionais. As coleções podem conter documentos relacionados, mas não impõem um esquema rígido aos documentos. Ou seja, diferentes documentos em uma coleção podem ter campos diferentes.

3. **Bancos de Dados:** Os bancos de dados no MongoDB são contêineres lógicos que mantêm várias coleções. Cada banco de dados pode ter várias coleções, e as coleções são independentes entre si. Você pode criar vários bancos de dados em um único servidor MongoDB.

4. **Campos:** Os campos são os pares chave-valor que compõem um documento BSON. Cada campo em um documento possui um nome exclusivo e um valor associado. Campos podem conter tipos de dados como strings, números, datas e até mesmo outros documentos ou matrizes.

5. **Índices:** O MongoDB suporta a criação de índices para melhorar o desempenho das consultas. Os índices são usados para acelerar a pesquisa de documentos com base em critérios específicos, como a busca por valores em um campo.

6. **Consultas:** Para recuperar dados do MongoDB, você usa consultas que especificam critérios de pesquisa. O MongoDB oferece uma linguagem de consulta rica que permite encontrar documentos com base em valores de campos, projeções, ordenação e outras operações.

7. **Operações de CRUD:** O MongoDB suporta as operações CRUD (Create, Read, Update, Delete) para criar, ler, atualizar e excluir documentos em coleções. As operações de CRUD são realizadas por meio de comandos, como `insert`, `find`, `update` e `remove`.

O MongoDB é amplamente utilizado em aplicativos da web, móveis e IoT devido à sua flexibilidade, escalabilidade e capacidade de gerenciar dados não estruturados ou semiestruturados. Ele é particularmente adequado para casos de uso nos quais os requisitos de dados mudam com frequência ou quando se lida com grandes volumes de dados complexos.

## SUA HISTÓRIA:
1. **Origens (2007)**:
   - O MongoDB foi desenvolvido por Dwight Merriman, Eliot Horowitz e Kevin Ryan como parte de um projeto interno na DoubleClick, uma empresa de publicidade online.
   - O objetivo era criar um banco de dados escalável e de alto desempenho para lidar com os requisitos de armazenamento de dados em expansão na empresa.

2. **Lançamento Público (2009)**:
   - O MongoDB foi lançado publicamente em fevereiro de 2009 como um projeto de código aberto sob a licença AGPL (Affero General Public License).
   - O lançamento atraiu a atenção da comunidade de desenvolvimento de software devido à sua abordagem inovadora para o armazenamento de dados, especialmente para aplicativos da web modernos.

3. **Princípios de Design**:
   - O MongoDB foi projetado com base nos princípios de document-oriented database, o que significa que os dados são armazenados em documentos BSON (Binary JSON), em vez de tabelas como em bancos de dados relacionais.
   - Ele oferece uma estrutura flexível para armazenar e consultar dados, permitindo que os desenvolvedores trabalhem com dados semi-estruturados e altamente variáveis.

4. **Adoção e Popularidade**:
   - O MongoDB ganhou popularidade rapidamente entre os desenvolvedores devido à sua flexibilidade, escalabilidade e facilidade de uso.
   - Ele foi adotado por uma ampla gama de empresas, desde startups até grandes corporações, para uma variedade de casos de uso, incluindo análise de big data, gerenciamento de conteúdo, aplicativos da web, IoT (Internet of Things) e muito mais.

5. **Evolução e Versões**:
   - O MongoDB continua a evoluir com o tempo, com lançamentos regulares que trazem novos recursos, melhorias de desempenho e correções de bugs.
   - Algumas das versões mais significativas incluem o MongoDB 3.0 (2015), que introduziu a replicação multi-documento e o MongoDB 4.0 (2018), que trouxe transações multi-documento para clusters distribuídos.

6. **Ecossistema e Ferramentas**:
   - Além do próprio banco de dados, o MongoDB oferece uma ampla gama de ferramentas e serviços complementares, incluindo MongoDB Atlas (serviço de banco de dados como serviço), MongoDB Compass (interface gráfica de usuário), MongoDB Stitch (backend como serviço) e muito mais.
   - O ecossistema em torno do MongoDB é rico e vibrante, com uma comunidade ativa de desenvolvedores, consultores, parceiros e contribuidores.

7. **Adoção na Educação**:
   - O MongoDB é frequentemente usado em ambientes educacionais para ensinar conceitos de bancos de dados NoSQL e para fornecer experiência prática aos alunos.
   - A documentação abrangente e os recursos de aprendizado online tornam o MongoDB uma escolha popular para cursos e treinamentos de bancos de dados.

## MONGODB != MYSQL:
O MongoDB e o MySQL são dois sistemas de gerenciamento de banco de dados com abordagens e estruturas bastante diferentes. Aqui estão algumas das principais diferenças entre o MongoDB e o MySQL:

1. **Modelagem de Dados:**

   - **MongoDB:** O MongoDB é um banco de dados NoSQL orientado a documentos. Ele armazena dados em documentos BSON (Binary JSON) flexíveis, permitindo que cada documento tenha uma estrutura própria, incluindo campos variados e aninhamento de documentos. Não há necessidade de um esquema rígido.

   - **MySQL:** O MySQL é um banco de dados relacional, o que significa que os dados são organizados em tabelas com esquemas fixos. As tabelas contêm colunas predefinidas e os dados são armazenados em linhas.

2. **Consulta e Linguagem de Consulta:**

   - **MongoDB:** O MongoDB usa uma linguagem de consulta rica que é semelhante ao JSON para recuperar documentos. As consultas são realizadas em documentos BSON usando operadores como `$eq`, `$gt`, `$lt` e muitos outros para filtrar, projetar e manipular dados.

   - **MySQL:** O MySQL usa SQL (Structured Query Language) para consultas, que é uma linguagem declarativa. As consultas SQL são usadas para recuperar, filtrar, juntar e manipular dados em tabelas relacionais.

3. **Escalabilidade:**

   - **MongoDB:** O MongoDB é altamente escalável e é projetado para funcionar bem em ambientes distribuídos. Ele suporta escalabilidade horizontal, o que significa que você pode adicionar mais servidores para aumentar a capacidade de armazenamento e a capacidade de lidar com cargas de trabalho maiores.

   - **MySQL:** O MySQL também suporta escalabilidade, mas geralmente é mais complexo dimensionar horizontalmente. A escalabilidade vertical, aumentando os recursos de um único servidor, é uma abordagem mais comum.

4. **Índices:**

   - **MongoDB:** O MongoDB suporta a criação de índices para acelerar consultas em campos específicos. Os índices podem ser criados em qualquer campo, incluindo campos incorporados em documentos.

   - **MySQL:** O MySQL também suporta índices, mas o processo de criação e gerenciamento de índices pode ser mais detalhado devido à estrutura relacional.

5. **Transações:**

   - **MongoDB:** O MongoDB suporta transações desde a versão 4.0, permitindo operações atômicas em vários documentos.

   - **MySQL:** O MySQL é conhecido por seu suporte a transações e conformidade com o padrão ACID (Atomicidade, Consistência, Isolamento e Durabilidade). Transações são amplamente usadas em aplicativos que requerem consistência estrita.

6. **Relacionamento entre Dados:**

   - **MongoDB:** O MongoDB é adequado para dados semiestruturados e não relacionais, e não enfatiza a criação de relacionamentos rígidos entre documentos.

   - **MySQL:** O MySQL é projetado para criar relacionamentos entre tabelas usando chaves estrangeiras, tornando-o uma escolha comum para aplicativos com dados altamente relacionados.

Essas são algumas das diferenças-chave entre o MongoDB e o MySQL. A escolha entre eles depende dos requisitos específicos do seu projeto, incluindo a estrutura dos dados, a escalabilidade, o desempenho e o modelo de desenvolvimento que você pretende adotar.

## CARACTERISTICAS:
### POSITIVAS:
1. **Flexibilidade de Modelagem:** O MongoDB permite uma modelagem de dados extremamente flexível devido à sua estrutura de documento. Você pode adicionar ou remover campos sem a necessidade de um esquema rígido, o que é útil em cenários onde os requisitos de dados mudam frequentemente.

2. **Escalabilidade Horizontal:** O MongoDB é altamente escalável e suporta a escalabilidade horizontal de forma nativa. Isso torna mais fácil lidar com grandes volumes de dados e cargas de trabalho em expansão.

3. **Consultas Ricas:** O MongoDB oferece uma linguagem de consulta rica, permitindo consultas complexas e filtragem de dados de maneira eficiente. Operadores como `$eq`, `$gt`, `$lt` e agregação fornecem flexibilidade na consulta de documentos.

4. **Desempenho de Leitura Rápida:** O MongoDB pode fornecer desempenho de leitura rápido, especialmente quando os dados são distribuídos em vários servidores.

### NEGATIVAS:
1. **Consistência e Transações:** Embora o MongoDB suporte transações desde a versão 4.0, o suporte a transações é menos rigoroso do que em bancos de dados relacionais, o que pode ser problemático em cenários que exigem estrita consistência transacional.

2. **Não Relacionamento Direto:** O MongoDB não é a melhor escolha para aplicativos que dependem fortemente de relações complexas entre tabelas. Modelar relacionamentos no MongoDB requer uma abordagem diferente.

3. **Tamanho de Armazenamento:** Documentos BSON podem ser mais pesados em termos de armazenamento do que representações tabulares de dados, o que pode afetar o consumo de espaço em disco.

## SUBSIDIOS:
- [CURSO CRIADO PELO "ZURUBABEL"](https://youtube.com/playlist?list=PL4Sl6eAbMK7RsS4Q8tSHTlOIaUmTG9eRS&si=haPY8dCifHsBy6L2)
- [CURSO FEITO PELO VILHALVA](https://github.com/VILHALVA)
- [VEJA A DOCUMENTAÇÃO](https://www.mongodb.com/docs/)
- [VEJA O MANUAL](./MANUAL.md)
- [VEJA A SINTAXE](./SINTAXE.md)

