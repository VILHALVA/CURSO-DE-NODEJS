# COMO VALIDAR FORMULARIOS?
A validação de formulários em uma aplicação Express.js geralmente envolve a validação dos dados enviados pelos usuários em uma solicitação HTTP (por exemplo, dados de um formulário HTML) para garantir que eles atendam aos critérios desejados. Uma das bibliotecas populares para realizar validação em formulários é o `express-validator`.

Aqui estão os passos para validar formulários no Express.js usando o `express-validator`:

1. **Instale o `express-validator`**:

   Você pode instalar o `express-validator` via npm:

   ```bash
   npm install express-validator
   ```

2. **Configure o Middleware de Validação**:

   Configure o middleware de validação em sua aplicação Express. Certifique-se de configurá-lo após o middleware de análise de corpo (por exemplo, `body-parser`). Aqui está um exemplo:

   ```javascript
   const express = require('express');
   const { body, validationResult } = require('express-validator');
   const app = express();

   app.use(express.json());
   app.use(express.urlencoded({ extended: false }));

   // Middleware de validação personalizado para verificar erros de validação.
   const validate = (req, res, next) => {
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
       return res.status(422).json({ errors: errors.array() });
     }
     next();
   };
   ```

3. **Defina Regras de Validação**:

   Use as funções de validação do `express-validator`, como `body()`, para definir regras de validação para campos específicos. Você pode adicionar várias validações a um campo. Por exemplo:

   ```javascript
   app.post(
     '/registro',
     [
       body('nome').notEmpty().withMessage('O nome é obrigatório'),
       body('email').isEmail().withMessage('Email inválido'),
       body('senha').isLength({ min: 6 }).withMessage('A senha deve ter pelo menos 6 caracteres'),
     ],
     validate, // Middleware de validação personalizado
     (req, res) => {
       // Se a validação passar, você pode prosseguir com o processamento.
       const { nome, email, senha } = req.body;
       // Faça algo com os dados, como salvar no banco de dados.
       res.json({ mensagem: 'Registro bem-sucedido' });
     }
   );
   ```

4. **Trate Erros de Validação**:

   No exemplo acima, se a validação falhar, o middleware de validação personalizado retornará uma resposta com status 422 e uma matriz de erros de validação. Você pode personalizar a maneira como lida com esses erros, como renderizar uma página de erro, enviar mensagens de erro ao cliente ou realizar outras ações apropriadas.

   ```javascript
   app.use((err, req, res, next) => {
     // Lidar com erros gerais aqui.
     console.error(err);
     res.status(500).json({ erro: 'Erro interno do servidor' });
   });
   ```

Isso é um exemplo básico de como usar o `express-validator` para validar formulários no Express.js. Você pode adaptar esses princípios ao seu aplicativo e às regras de validação específicas do seu formulário. Certifique-se de consultar a documentação do `express-validator` para obter mais detalhes sobre as opções de validação disponíveis e como personalizar ainda mais a validação para atender às suas necessidades.