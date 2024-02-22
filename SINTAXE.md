# SINTAXE
Abaixo estão alguns exemplos de comandos MongoDB junto com explicações de cada parte:

1. **Conectar ao banco de dados MongoDB**:

   Para conectar-se ao banco de dados MongoDB, você pode usar o shell do MongoDB ou uma biblioteca cliente em sua linguagem de programação preferida. No shell do MongoDB, o comando é:

   ```bash
   mongo --host nome-do-host --port numero-da-porta --username usuario --password senha
   ```

   Isso iniciará o shell do MongoDB e se conectará ao banco de dados especificado.

2. **Criar um banco de dados**:

   Para criar um novo banco de dados MongoDB, você pode usar o comando `use` seguido do nome do banco de dados:

   ```javascript
   use meu_banco_de_dados
   ```

   Isso criará um novo banco de dados chamado `meu_banco_de_dados`.

3. **Criar uma coleção**:

   Para criar uma coleção em um banco de dados MongoDB, você pode usar o método `db.createCollection()`:

   ```javascript
   db.createCollection('usuarios')
   ```

   Isso criará uma coleção chamada `usuarios` no banco de dados atual.

4. **Inserir documentos na coleção**:

   Para inserir documentos em uma coleção MongoDB, você pode usar o método `insertOne()` ou `insertMany()`:

   ```javascript
   db.usuarios.insertOne({ nome: 'João', idade: 30 })
   ```

   Isso inserirá um novo documento na coleção `usuarios` com os campos `nome` e `idade`.

5. **Consultar documentos na coleção**:

   Para consultar documentos em uma coleção MongoDB, você pode usar o método `find()`:

   ```javascript
   db.usuarios.find({ nome: 'João' })
   ```

   Isso retornará todos os documentos na coleção `usuarios` onde o campo `nome` é igual a "João".

6. **Atualizar documentos na coleção**:

   Para atualizar documentos em uma coleção MongoDB, você pode usar o método `updateOne()` ou `updateMany()`:

   ```javascript
   db.usuarios.updateOne({ nome: 'João' }, { $set: { idade: 35 } })
   ```

   Isso atualizará o documento na coleção `usuarios` onde o campo `nome` é igual a "João", definindo o campo `idade` como 35.

7. **Excluir documentos na coleção**:

   Para excluir documentos de uma coleção MongoDB, você pode usar o método `deleteOne()` ou `deleteMany()`:

   ```javascript
   db.usuarios.deleteOne({ nome: 'João' })
   ```

   Isso excluirá o primeiro documento na coleção `usuarios` onde o campo `nome` é igual a "João".

Esses são apenas alguns exemplos básicos de comandos MongoDB que podem ser usados para criar, manipular e consultar dados em um banco de dados MongoDB. O MongoDB oferece muitos outros recursos e funcionalidades avançadas que podem ser explorados conforme você desenvolve seus aplicativos.