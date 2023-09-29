# COMO CRIAR TABELAS NO MYSQL?
## CONECTANDO O SERVIDOR:
No CMD, digite:
```bash
mysql -h localhost -u root -p
```

## CRIANDO DATABASE:
Para criar um banco de dados no MySQL, você pode usar o comando SQL `CREATE DATABASE`. Aqui está um exemplo de como criar um novo banco de dados:

```sql
CREATE DATABASE nome_do_banco_de_dados;
```

Aqui estão os passos:

1. **CREATE DATABASE**: Inicie o comando com `CREATE DATABASE` para indicar que você deseja criar um novo banco de dados.

2. **nome_do_banco_de_dados**: Substitua isso pelo nome que você deseja dar ao seu banco de dados.

Por exemplo, para criar um banco de dados chamado "minhabasedados", você pode usar o seguinte comando:

```sql
CREATE DATABASE minhabasedados;
```

Após executar este comando, o MySQL criará um novo banco de dados com o nome especificado.

Lembre-se de que você precisa ter os privilégios necessários no MySQL para criar um banco de dados. Em sistemas onde você precisa de autenticação, certifique-se de estar conectado como um usuário com privilégios de administrador ou que tenha a permissão necessária para criar bancos de dados.

Depois de criar um banco de dados, você pode começar a criar tabelas, inserir dados e executar outras operações SQL dentro desse banco de dados específico. Para selecionar um banco de dados para uso em suas consultas SQL, use o comando `USE`:

```sql
USE nome_do_banco_de_dados;
```

Substitua `nome_do_banco_de_dados` pelo nome do banco de dados que você deseja usar. Por exemplo:

```sql
USE minhabasedados;
```

A partir deste ponto, todas as consultas SQL que você executar serão direcionadas ao banco de dados "minhabasedados" até que você mude para outro banco de dados usando `USE` novamente ou até que você se desconecte da sessão.

## CRIANDO TABELA:
Para criar tabelas no MySQL, você pode usar o comando SQL `CREATE TABLE`. Aqui está um exemplo de como criar uma tabela simples no MySQL:

```sql
CREATE TABLE nome_da_tabela (
    coluna1_tipo coluna1_nome,
    coluna2_tipo coluna2_nome,
    ...
);
```

Aqui está uma explicação passo a passo:

1. **CREATE TABLE**: Inicie o comando com `CREATE TABLE` para indicar que você deseja criar uma nova tabela.

2. **nome_da_tabela**: Substitua isso pelo nome que você deseja dar à tabela.

3. **colunaX_tipo**: Especifique o tipo de dados da coluna X. Existem vários tipos de dados disponíveis no MySQL, como INT (inteiro), VARCHAR (texto), DATE (data), etc.

4. **colunaX_nome**: Especifique o nome da coluna X.

5. **...**: Você pode adicionar quantas colunas quiser, separando-as por vírgulas.

Aqui está um exemplo de criação de uma tabela chamada "pessoas" com duas colunas: "id" e "nome":

```sql
CREATE TABLE pessoas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50)
);
```

Neste exemplo:

- `id` é uma coluna de tipo INT que armazena números inteiros.
- `AUTO_INCREMENT` é uma propriedade que faz com que o MySQL atribua automaticamente valores incrementais a essa coluna quando novos registros são inseridos. É frequentemente usado para chaves primárias.
- `PRIMARY KEY` indica que a coluna "id" é a chave primária da tabela, o que a torna exclusiva e garante que cada registro tenha um valor único para essa coluna.
- `nome` é uma coluna de tipo VARCHAR que armazena texto com até 50 caracteres.

Depois de criar a tabela, você pode começar a inserir dados nela usando o comando `INSERT INTO` e consultar os dados usando o comando `SELECT`.

Aqui estão alguns comandos SQL adicionais relacionados a tabelas no MySQL:

- **ALTER TABLE**: Usado para modificar uma tabela existente, como adicionar, alterar ou excluir colunas.
- **DROP TABLE**: Usado para excluir uma tabela existente e todos os seus dados.
- **DESCRIBE nome_da_tabela**: Usado para ver a estrutura de uma tabela, ou seja, listar as colunas e seus tipos de dados.

Lembre-se de que o SQL é sensível a maiúsculas e minúsculas, então preste atenção à ortografia e à formatação ao criar tabelas e colunas. Certifique-se também de ter os privilégios necessários no MySQL para criar tabelas em um banco de dados específico.