# ATUALIZANDO REGISTROS
Para atualizar registros em uma tabela MySQL, você pode usar a declaração SQL `UPDATE`. A declaração `UPDATE` permite modificar os valores das colunas em registros existentes com base em uma condição específica. Aqui está a sintaxe básica:

```sql
UPDATE nome_da_tabela
SET coluna1 = novo_valor1, coluna2 = novo_valor2, ...
WHERE condição;
```

Aqui estão os elementos da declaração `UPDATE`:

- `nome_da_tabela`: Substitua isso pelo nome da tabela na qual você deseja atualizar registros.
- `coluna1`, `coluna2`, etc.: Liste as colunas que você deseja atualizar.
- `novo_valor1`, `novo_valor2`, etc.: Forneça os novos valores para as colunas correspondentes.
- `condição`: Especifique uma condição que determine quais registros serão atualizados. Se você omitir a cláusula `WHERE`, todos os registros da tabela serão atualizados com os novos valores fornecidos.

Aqui estão alguns exemplos de como usar a declaração `UPDATE` para atualizar registros:

**Exemplo 1: Atualizar o Preço de um Produto Específico:**

Suponha que você tenha uma tabela chamada "produtos" com as colunas "id", "nome" e "preco", e você deseja aumentar o preço de um produto específico com base no ID:

```sql
UPDATE produtos
SET preco = 29.99
WHERE id = 123;
```

Isso aumentará o preço do produto com o ID 123 para $29.99.

**Exemplo 2: Atualizar a Categoria de Produtos com Preço Anterior Superior a $100:**

```sql
UPDATE produtos
SET categoria = 'Eletrodomésticos'
WHERE preco > 100;
```

Isso atualizará a categoria de todos os produtos com preço superior a $100 para 'Eletrodomésticos'.

**Atenção:** Tenha cuidado ao usar a declaração `UPDATE`, pois ela pode afetar vários registros simultaneamente. Certifique-se de fornecer a condição correta na cláusula `WHERE` para garantir que apenas os registros desejados sejam atualizados. Além disso, é importante fazer backup dos dados antes de realizar atualizações em massa ou significativas em seu banco de dados, especialmente em um ambiente de produção.