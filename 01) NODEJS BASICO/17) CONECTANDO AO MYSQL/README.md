# COMO SE CONECTAR AO MYSQL?
Para se conectar ao MySQL a partir de um aplicativo Node.js, você pode usar um pacote como o "mysql2" junto com o Sequelize (um ORM para Node.js) ou usar diretamente o "mysql2" para interações mais diretas com o banco de dados MySQL. Vou mostrar como fazer a conexão usando o "mysql2" diretamente. Certifique-se de que você já instalou o pacote "mysql2" no seu projeto com o comando `npm install mysql2`.

Aqui está um exemplo de como se conectar ao MySQL em um aplicativo Node.js:

```javascript
const mysql = require('mysql2');

// Configurações de conexão
const connection = mysql.createConnection({
  host: 'localhost',        // Endereço do servidor MySQL
  user: 'seu_usuario',      // Nome de usuário do MySQL
  password: 'sua_senha',    // Senha do MySQL
  database: 'seu_banco'     // Nome do banco de dados que você deseja conectar
});

// Estabelece a conexão
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conexão ao MySQL estabelecida com sucesso!');
  
  // Você pode realizar operações no banco de dados aqui
  // Por exemplo, consultas SQL
  connection.query('SELECT * FROM sua_tabela', (err, results) => {
    if (err) {
      console.error('Erro ao executar consulta:', err);
      return;
    }
    console.log('Resultado da consulta:', results);
  });
  
  // Não se esqueça de fechar a conexão quando terminar
  connection.end((err) => {
    if (err) {
      console.error('Erro ao encerrar a conexão:', err);
      return;
    }
    console.log('Conexão ao MySQL encerrada com sucesso!');
  });
});
```

Neste exemplo:

- `host`: O endereço do servidor MySQL. Pode ser um endereço IP ou "localhost" se o MySQL estiver instalado na mesma máquina.

- `user` e `password`: O nome de usuário e senha do MySQL.

- `database`: O nome do banco de dados ao qual você deseja se conectar.

- `connection.connect`: Este é o método usado para estabelecer a conexão com o MySQL.

- `connection.query`: Use este método para executar consultas SQL no banco de dados.

- `connection.end`: Este método fecha a conexão com o MySQL quando você terminar de usá-la.

Lembre-se de substituir os valores em `user`, `password`, `database` e outras partes do código com suas próprias credenciais e configurações específicas.

Certifique-se de que o servidor MySQL esteja em execução e acessível a partir da máquina onde seu aplicativo Node.js está sendo executado.