# DEFININDO O MODEL DE POSTAGENS
Definir um modelo (model) de postagens em um aplicativo Node.js usando o Mongoose é uma parte essencial de construir um sistema de gerenciamento de postagens. Aqui está um exemplo de como você pode definir um modelo de postagens usando o Mongoose:

```javascript
const mongoose = require('mongoose');

// Defina o esquema (schema) para as postagens
const PostagemSchema = new mongoose.Schema({
  título: {
    type: String,
    required: true
  },
  conteúdo: {
    type: String,
    required: true
  },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuário',
    required: true
  },
  dataPublicação: {
    type: Date,
    default: Date.now
  }
});

// Crie e exporte o modelo de postagens
const Postagem = mongoose.model('Postagem', PostagemSchema);

module.exports = Postagem;
```

Neste exemplo:

1. Importamos o Mongoose e definimos um esquema (`PostagemSchema`) para as postagens. O esquema especifica os campos que uma postagem deve ter, seus tipos de dados e quais campos são obrigatórios (`required: true`).

2. O campo "autor" é definido como um ObjectId que faz referência ao modelo de "Usuário". Isso permite relacionar cada postagem a um autor específico.

3. O campo "dataPublicação" é configurado para usar a data atual como valor padrão quando uma nova postagem é criada.

4. Criamos o modelo de postagens (`Postagem`) usando o método `mongoose.model()` e o exportamos para que possa ser usado em outros lugares do seu aplicativo.

Agora você tem um modelo de postagens que pode ser usado para criar, ler, atualizar e excluir postagens em seu aplicativo Node.js usando o Mongoose. Certifique-se de que o modelo de "Usuário" também esteja definido, pois é referenciado pelo modelo de postagens no campo "autor".