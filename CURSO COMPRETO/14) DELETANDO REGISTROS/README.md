# DELETANDO REGISTROS
Para excluir registros em uma tabela MySQL, você pode usar a declaração SQL `DELETE`. Aqui está a sintaxe básica:

```sql
DELETE FROM nome_da_tabela WHERE condição;
```

Aqui está uma explicação dos elementos da declaração `DELETE`:

- `nome_da_tabela`: Substitua isso pelo nome da tabela da qual você deseja excluir registros.
- `condição`: Especifique uma condição que indique quais registros devem ser excluídos. Se você omitir a cláusula `WHERE`, todos os registros da tabela serão excluídos.

Aqui estão alguns exemplos de como usar a declaração `DELETE` para excluir registros:

**Excluir Todos os Registros de uma Tabela:**

```sql
DELETE FROM nome_da_tabela;
```

Isso excluirá todos os registros da tabela, deixando a tabela vazia.

**Excluir Registros com Base em uma Condição:**

Por exemplo, se você deseja excluir todos os pedidos com um valor superior a $100:

```sql
DELETE FROM pedidos WHERE valor > 100;
```

**Excluir um Registro Específico com Base em uma Chave Primária:**

Suponha que você tenha uma tabela chamada "clientes" com uma coluna "id" como chave primária e deseja excluir um cliente com um ID específico, como 42:

```sql
DELETE FROM clientes WHERE id = 42;
```

**Atenção:** Tenha cuidado ao usar a declaração `DELETE`, pois ela é irreversível e pode resultar na perda permanente de dados. Certifique-se de estar absolutamente certo da ação que está executando, especialmente em um ambiente de produção. Sempre faça backup dos dados importantes antes de realizar exclusões em massa ou significativas em seu banco de dados.