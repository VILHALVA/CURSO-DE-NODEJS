# MANIPULANDO DADOS
Para manipular um banco de dados MySQL, você usará consultas SQL (Structured Query Language) para realizar diversas operações, como criar, ler, atualizar e excluir dados. Vou fornecer exemplos das operações mais comuns no MySQL:

**1. Inserir Dados (CREATE):**

Para adicionar dados a uma tabela, você usará a declaração `INSERT INTO`. Aqui está um exemplo:

```sql
INSERT INTO nome_da_tabela (coluna1, coluna2, coluna3) VALUES (valor1, valor2, valor3);
```

Substitua `nome_da_tabela` pelo nome da tabela em que você deseja inserir os dados. Liste as colunas nas quais deseja inserir dados após o nome da tabela e, em seguida, forneça os valores correspondentes.

Exemplo:

```sql
INSERT INTO clientes (nome, email, telefone) VALUES ('João', 'joao@email.com', '123-456-7890');
```

**2. Selecionar Dados (READ):**

Para recuperar dados de uma tabela, use a declaração `SELECT`. Aqui está um exemplo:

```sql
SELECT coluna1, coluna2 FROM nome_da_tabela WHERE condição;
```

Substitua `coluna1`, `coluna2` pelo nome das colunas que você deseja recuperar e `nome_da_tabela` pelo nome da tabela. Você pode usar a cláusula `WHERE` para filtrar os resultados com base em uma condição.

Exemplo:

```sql
SELECT nome, email FROM clientes WHERE idade > 25;
```

**3. Atualizar Dados (UPDATE):**

Para atualizar dados existentes em uma tabela, use a declaração `UPDATE`. Aqui está um exemplo:

```sql
UPDATE nome_da_tabela SET coluna1 = novo_valor WHERE condição;
```

Substitua `coluna1` pelo nome da coluna que você deseja atualizar, `novo_valor` pelo valor atualizado e `condição` pela condição que define quais registros serão atualizados.

Exemplo:

```sql
UPDATE produtos SET preco = 19.99 WHERE categoria = 'Eletrônicos';
```

**4. Excluir Dados (DELETE):**

Para excluir dados de uma tabela, use a declaração `DELETE`. Aqui está um exemplo:

```sql
DELETE FROM nome_da_tabela WHERE condição;
```

Substitua `nome_da_tabela` pelo nome da tabela e `condição` pela condição que define quais registros serão excluídos.

Exemplo:

```sql
DELETE FROM pedidos WHERE data < '2023-01-01';
```

**5. Criar Tabelas (CREATE TABLE):**

Já mencionei isso anteriormente, mas para criar uma nova tabela, use a declaração `CREATE TABLE`. Aqui está um exemplo:

```sql
CREATE TABLE nome_da_tabela (
    coluna1_tipo coluna1_nome,
    coluna2_tipo coluna2_nome,
    ...
);
```

**6. Modificar Tabelas (ALTER TABLE):**

Para fazer alterações em uma tabela existente, use a declaração `ALTER TABLE`. Por exemplo, você pode adicionar, modificar ou excluir colunas.

Exemplo de adição de coluna:

```sql
ALTER TABLE nome_da_tabela ADD nova_coluna_tipo nova_coluna_nome;
```

**7. Excluir Tabelas (DROP TABLE):**

Para excluir uma tabela, use a declaração `DROP TABLE`.

```sql
DROP TABLE nome_da_tabela;
```

Lembre-se de que as operações de atualização e exclusão de dados (UPDATE e DELETE) podem ser irreversíveis, por isso é importante usá-las com cuidado, especialmente em um ambiente de produção. Sempre faça backup dos dados importantes antes de realizar alterações significativas em seu banco de dados.