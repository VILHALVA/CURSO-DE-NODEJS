# DEFININDO MODEL DE CATEGORIAS
Para definir o modelo (model) de categorias em uma aplicação Node.js usando o Mongoose, siga as etapas abaixo:

1. **Instale o Mongoose:**

   Certifique-se de que você tenha o Mongoose instalado em seu projeto. Se ainda não o fez, instale-o usando o npm:

   ```
   npm install mongoose
   ```

2. **Crie um Arquivo de Modelo para Categorias:**

   Crie um arquivo, por exemplo, `Categoria.js`, em que você definirá o modelo de categoria. Este arquivo estará na mesma pasta onde você define seus modelos (pode ser uma pasta chamada `models`).

   ```javascript
   const mongoose = require('mongoose');

   // Defina o esquema (schema) para a categoria
   const categoriaSchema = new mongoose.Schema({
     nome: {
       type: String,
       required: true, // Campo obrigatório
       unique: true,   // Deve ser único
     },
     descricao: String,
     dataCriacao: {
       type: Date,
       default: Date.now, // Define a data de criação automaticamente
     },
   });

   // Crie um modelo (model) com base no esquema
   const Categoria = mongoose.model('Categoria', categoriaSchema);

   module.exports = Categoria;
   ```

   Neste exemplo, definimos um modelo de categoria com os campos `nome`, `descricao` e `dataCriacao`. O campo `nome` é obrigatório (`required: true`) e deve ser único (`unique: true`). O campo `dataCriacao` é definido automaticamente com a data atual sempre que uma nova categoria é criada.

3. **Conecte-se ao Banco de Dados:**

   No seu arquivo principal de aplicação (por exemplo, `app.js`), certifique-se de que você tenha uma conexão estabelecida com o banco de dados MongoDB usando o Mongoose:

   ```javascript
   const mongoose = require('mongoose');

   // Conecte-se ao banco de dados
   mongoose.connect('mongodb://localhost/seu_banco_de_dados', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   });

   const db = mongoose.connection;

   // Lidar com eventos de conexão do MongoDB
   db.on('error', console.error.bind(console, 'Erro de conexão com o MongoDB:'));
   db.once('open', () => {
     console.log('Conectado ao banco de dados MongoDB.');
   });
   ```

   Substitua `'mongodb://localhost/seu_banco_de_dados'` pela URL de conexão correta do seu banco de dados MongoDB.

4. **Usando o Modelo de Categoria:**

   Agora que você definiu o modelo de categoria, pode usá-lo em suas rotas ou controladores para realizar operações de leitura, criação, atualização e exclusão de categorias no banco de dados.

   Por exemplo, para criar uma nova categoria:

   ```javascript
   const Categoria = require('./models/Categoria');

   // Rota para criar uma nova categoria
   app.post('/admin/categorias', async (req, res) => {
     try {
       const novaCategoria = new Categoria(req.body);
       await novaCategoria.save();
       res.redirect('/admin/categorias/nova');
     } catch (error) {
       console.error('Erro ao criar categoria:', error);
       res.status(500).send('Erro ao criar categoria.');
     }
   });
   ```

   Lembre-se de importar o modelo de categoria no arquivo onde você deseja usá-lo.

Agora você tem um modelo de categoria configurado em sua aplicação Node.js usando o Mongoose. Certifique-se de ajustar suas rotas e controladores de acordo com as necessidades da sua aplicação.