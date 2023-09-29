# SEQUELIZE
O Sequelize é um ORM (Object-Relational Mapping) para Node.js que permite interagir com bancos de dados relacionais, como MySQL, PostgreSQL, SQLite e outros, usando JavaScript. Com o Sequelize, você pode trabalhar com bancos de dados de uma maneira mais orientada a objetos, criando modelos de dados que correspondem às tabelas do banco de dados e executando operações CRUD (Create, Read, Update, Delete) de forma mais simples e legível.

Aqui estão alguns conceitos-chave e exemplos de como usar o Sequelize:

**Instalação do Sequelize:**

Para começar, você precisará instalar o Sequelize em seu projeto Node.js. Você pode fazer isso usando o npm ou yarn. Por exemplo:

```bash
npm install --save sequelize
```
```bash
npm install --save mysql2
```

**Configuração do Sequelize:**

Configure o Sequelize para se conectar ao banco de dados. Você precisa fornecer informações de configuração, como nome de usuário, senha, host e tipo de banco de dados. Isso geralmente é feito em um arquivo de configuração. Aqui está um exemplo de configuração para o MySQL:

```javascript
const Sequelize = require('sequelize');

const sequelize = new Sequelize('nome_do_banco', 'nome_do_usuario', 'senha', {
  host: 'localhost',
  dialect: 'mysql',
});
```

**Definindo Modelos:**

No Sequelize, você define modelos que correspondem às tabelas do banco de dados. Cada modelo descreve a estrutura da tabela e seus relacionamentos com outras tabelas. Aqui está um exemplo de definição de um modelo de usuário:

```javascript
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
  // Define as colunas da tabela
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
```

**Executando Consultas:**

Você pode usar métodos do modelo para executar consultas SQL. Por exemplo, para criar um novo usuário:

```javascript
const newUser = await User.create({
  username: 'joao',
  email: 'joao@email.com',
  password: 'senha123',
});
```

Para encontrar todos os usuários:

```javascript
const allUsers = await User.findAll();
```

Para atualizar um usuário:

```javascript
await User.update(
  { username: 'novo_nome' },
  { where: { id: 1 } }
);
```

Para excluir um usuário:

```javascript
await User.destroy({ where: { id: 1 } });
```

**Relacionamentos:**

O Sequelize permite definir relacionamentos entre modelos, como associações de um para muitos, muitos para muitos, etc. Isso é feito usando os métodos `hasMany`, `belongsTo`, `belongsToMany`, etc.

**Migrações:**

O Sequelize fornece uma ferramenta chamada Sequelize CLI (sequelize-cli) para criar e executar migrações. As migrações são usadas para controlar a estrutura do banco de dados e aplicar alterações de esquema de forma controlada.

Esta é apenas uma introdução ao Sequelize. Ele oferece muitos recursos poderosos para trabalhar com bancos de dados relacionais em Node.js. Ao longo do desenvolvimento de seu projeto, você aprenderá a usar recursos mais avançados do Sequelize, como transações, consultas complexas e consultas SQL personalizadas.