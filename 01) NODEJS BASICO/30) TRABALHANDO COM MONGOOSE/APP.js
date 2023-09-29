const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/aprendendo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Conexão com o MongoDB estabelecida com sucesso");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao MongoDB:", error);
  });

// MODEL USUÁRIOS:
const UsuarioSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  sobrenome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  idade: {
    type: Number,
    required: true
  },
  pais: {
    type: String,
  }
});

// COLEÇÃO:
const Usuario = mongoose.model('Usuario', UsuarioSchema);

// Criar um novo usuário
Usuario.create({
  nome: "SAMUEL",
  sobrenome: "VILHALVA",
  email: "samuel@email.com",
  idade: 27,
  pais: "BRASIL"
})
  .then(() => {
    console.log("USUÁRIO CRIADO COM SUCESSO!");
  })
  .catch((err) => {
    console.error("ERRO AO CRIAR USUÁRIO: ", err);
  });
