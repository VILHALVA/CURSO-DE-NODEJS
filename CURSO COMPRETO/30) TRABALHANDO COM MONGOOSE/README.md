# TRABALHANDO COM MONGOOSE
Trabalhar com o Mongoose é uma tarefa comum ao desenvolver aplicativos Node.js com o MongoDB. O Mongoose é uma biblioteca ODM (Object-Document Mapping) que simplifica a interação com o MongoDB usando JavaScript. Ele fornece uma camada de abstração sobre o MongoDB, permitindo que você defina modelos de dados, crie esquemas e execute operações de banco de dados de maneira mais simples e organizada.

Aqui estão os passos básicos para começar a trabalhar com o Mongoose:

1. **Instale o Mongoose**:

   Certifique-se de que você tenha o Mongoose instalado em seu projeto. Você pode instalá-lo usando o npm ou yarn:

   ```bash
   npm install mongoose
   ```

   ou

   ```bash
   yarn add mongoose
   ```

2. **Conecte-se ao MongoDB**:

   Antes de usar o Mongoose, você precisa estabelecer uma conexão com o servidor MongoDB. Use o método `mongoose.connect()` para fazer isso:

   ```javascript
   const mongoose = require('mongoose');

   mongoose.connect('mongodb://localhost/nome-do-banco-de-dados', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   });

   const db = mongoose.connection;

   db.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB:'));
   db.once('open', () => {
     console.log('Conectado ao MongoDB!');
   });
   ```

   Substitua `'mongodb://localhost/nome-do-banco-de-dados'` pelo URI de conexão do seu banco de dados MongoDB.

3. **Defina um Schema**:

   O Mongoose permite que você defina um schema para os documentos MongoDB que você pretende criar. Um schema define a estrutura e os tipos de dados dos documentos. Aqui está um exemplo de como definir um schema:

   ```javascript
   const mongoose = require('mongoose');

   const Schema = mongoose.Schema;

   const userSchema = new Schema({
     nome: String,
     email: String,
     idade: Number,
   });

   const User = mongoose.model('User', userSchema);
   ```

4. **Crie e Manipule Documentos**:

   Agora que você tem um modelo definido, pode criar e manipular documentos no MongoDB usando esse modelo. Aqui estão alguns exemplos de operações comuns:

   - **Criar um documento**:

     ```javascript
     const newUser = new User({
       nome: 'Alice',
       email: 'alice@example.com',
       idade: 30,
     });

     newUser.save((err, user) => {
       if (err) return console.error(err);
       console.log('Novo usuário salvo:', user);
     });
     ```

   - **Consultar documentos**:

     ```javascript
     User.find({ idade: { $gte: 25 } }, (err, users) => {
       if (err) return console.error(err);
       console.log('Usuários com idade maior ou igual a 25 anos:', users);
     });
     ```

   - **Atualizar um documento**:

     ```javascript
     User.updateOne({ nome: 'Alice' }, { idade: 31 }, (err, result) => {
       if (err) return console.error(err);
       console.log('Documento atualizado:', result);
     });
     ```

   - **Excluir um documento**:

     ```javascript
     User.deleteOne({ nome: 'Alice' }, (err) => {
       if (err) return console.error(err);
       console.log('Documento excluído com sucesso');
     });
     ```

5. **Desconecte-se do MongoDB**:

   Quando você terminar de usar o banco de dados, é uma boa prática desconectar-se:

   ```javascript
   mongoose.connection.close(() => {
     console.log('Desconectado do MongoDB');
   });
   ```

Esses são os conceitos básicos para começar a trabalhar com o Mongoose no Node.js. Você pode explorar mais recursos avançados, como validação de dados, relacionamentos entre modelos e middleware personalizado, à medida que avança no desenvolvimento do seu aplicativo. Certifique-se de consultar a documentação oficial do Mongoose para obter mais informações e detalhes sobre esses tópicos: [Documentação do Mongoose](https://mongoosejs.com/docs/).