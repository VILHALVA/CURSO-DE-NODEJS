# MODELS NO SEQUELISE
No Sequelize, os modelos (models) são a representação das tabelas do banco de dados em seu aplicativo Node.js. Cada modelo define a estrutura de uma tabela e os relacionamentos entre tabelas, permitindo que você realize operações de CRUD (Create, Read, Update, Delete) em seus dados de forma orientada a objetos. Vou fornecer um exemplo de como criar um modelo no Sequelize.

Suponha que você tenha uma tabela "Usuários" em seu banco de dados que deseja mapear para um modelo no Sequelize. Aqui está como você pode criar esse modelo:

```javascript
const { Sequelize, DataTypes } = require('sequelize');

// Crie uma instância do Sequelize e configure a conexão com o banco de dados
const sequelize = new Sequelize('CADASTRONODEJS', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

// Defina o modelo de Usuário
const Usuario = sequelize.define('Usuario', {
  // Define as colunas da tabela 'Usuarios'
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Sincronize o modelo com o banco de dados (cria a tabela 'Usuarios' se ela não existir)
Usuario.sync()
  .then(() => {
    console.log('Modelo de Usuário sincronizado com sucesso.');
  })
  .catch((err) => {
    console.error('Erro ao sincronizar modelo de Usuário:', err);
  });
```

Neste exemplo:

1. Importamos o módulo Sequelize e as classes `Sequelize` e `DataTypes` para criar nosso modelo.

2. Criamos uma instância do Sequelize e configuramos a conexão com o banco de dados. Certifique-se de substituir as informações de host, usuário e senha pelo seu ambiente.

3. Usamos o método `.define()` para definir o modelo "Usuario". O primeiro argumento é o nome do modelo, que será usado para mapear a tabela no banco de dados. O segundo argumento é um objeto que define as colunas da tabela "Usuarios" e seus tipos de dados. Neste caso, temos colunas para "nome", "email" e "senha".

4. Usamos o método `.sync()` para sincronizar o modelo com o banco de dados. Isso criará a tabela "Usuarios" no banco de dados, se ela ainda não existir. O método `.sync()` também é usado para aplicar quaisquer alterações de esquema definidas no modelo.

Agora você pode usar o modelo "Usuario" para realizar operações no banco de dados, como criar novos registros, consultar registros existentes, atualizar e excluir registros. O Sequelize fornece muitas funcionalidades poderosas para interagir com seu banco de dados usando JavaScript de forma mais orientada a objetos.