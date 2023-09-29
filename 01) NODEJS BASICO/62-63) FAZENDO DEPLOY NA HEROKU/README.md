# FAZENDO DEPLOY NA HEROKU
Fazer o deploy de uma aplicação Node.js na plataforma Heroku envolve várias etapas. Aqui estão os passos básicos para fazer o deploy de uma aplicação Node.js na Heroku:

**Passo 1: Configurar uma Conta no Heroku**
- Se você ainda não tem uma conta no Heroku, crie uma em [https://signup.heroku.com/](https://signup.heroku.com/).

**Passo 2: Instalar o Heroku CLI**
- Certifique-se de ter o [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) instalado em seu computador. O Heroku CLI permite que você gerencie suas aplicações Heroku a partir da linha de comando.

**Passo 3: Preparar sua Aplicação**
- Certifique-se de que sua aplicação Node.js esteja pronta para o deploy. Isso inclui ter um arquivo `package.json` configurado corretamente com todas as dependências da sua aplicação.

**Passo 4: Inicializar um Repositório Git**
- Se ainda não estiver usando o Git para controlar a versão de sua aplicação, inicie um repositório Git na pasta raiz do seu projeto:

```bash
git init
```

**Passo 5: Criar um Arquivo `.gitignore`**
- Crie um arquivo `.gitignore` para listar os arquivos e pastas que você deseja excluir do controle de versão. Normalmente, você deve excluir a pasta `node_modules` para evitar que ela seja enviada para o Heroku.

**Passo 6: Fazer Login no Heroku**
- Abra um terminal e faça login no Heroku CLI usando o comando:

```bash
heroku login
```

- Isso abrirá uma janela no navegador para autenticar sua conta.

**Passo 7: Criar um Novo App no Heroku**
- Use o Heroku CLI para criar um novo aplicativo. Substitua `my-app-name` pelo nome desejado para o seu aplicativo:

```bash
heroku create my-app-name
```

- Isso criará um aplicativo Heroku com um nome único. Anote o nome atribuído, pois você o usará para acessar seu aplicativo online.

**Passo 8: Adicionar um Repositório Remoto**
- Após criar o aplicativo no Heroku, você precisará adicionar um repositório remoto do Heroku ao seu projeto Git local:

```bash
git remote add heroku https://git.heroku.com/my-app-name.git
```

- Substitua `my-app-name` pelo nome do aplicativo Heroku que você criou.

**Passo 9: Preparar e Enviar Seu Código para o Heroku**
- Commit seus arquivos locais e, em seguida, envie-os para o Heroku:

```bash
git add .
git commit -m "Initial commit"
git push heroku master
```

**Passo 10: Escalar seu Aplicativo**
- Por padrão, o Heroku atribui uma única instância do servidor web para o seu aplicativo. Você pode aumentar o número de instâncias (escalá-lo) para lidar com mais tráfego:

```bash
heroku ps:scale web=2
```

- Isso escalonará o aplicativo para duas instâncias. Você pode ajustar o número conforme necessário.

**Passo 11: Abrir seu Aplicativo no Navegador**
- Depois de implantar com sucesso, você pode abrir seu aplicativo no navegador usando o seguinte comando:

```bash
heroku open
```

Isso abrirá seu aplicativo em uma nova guia do navegador.

Isso é um guia básico para fazer o deploy de uma aplicação Node.js na Heroku. Lembre-se de que há muitas outras configurações e personalizações possíveis, dependendo das necessidades do seu projeto. Certifique-se de consultar a documentação oficial do Heroku para obter informações detalhadas sobre como configurar seu aplicativo de acordo com suas necessidades específicas.

## [MLAB](https://www.mongodb.com/atlas/database)
Em setembro de 2021, a plataforma mLab, que fornecia serviços de banco de dados MongoDB como um serviço gerenciado na nuvem, foi adquirida pela MongoDB, Inc. Como resultado, a mLab não aceita mais novos clientes desde então e está em processo de encerramento de suas operações.

Antes da aquisição, a mLab era conhecida por oferecer um serviço fácil de usar para hospedar bancos de dados MongoDB na nuvem, eliminando a necessidade de configurar, manter e escalar bancos de dados MongoDB por conta própria. Ela era popular entre desenvolvedores, startups e pequenas empresas que desejavam uma solução de banco de dados gerenciada na nuvem.

Com a aquisição pela MongoDB, Inc., a empresa direcionou seus esforços para expandir seus próprios serviços de banco de dados gerenciados, como o MongoDB Atlas. Portanto, em vez de usar a mLab, muitos clientes agora optam por migrar para o MongoDB Atlas ou outras alternativas de banco de dados MongoDB na nuvem.

No geral, a mLab desempenhou um papel importante em tornar o MongoDB mais acessível para uma ampla gama de desenvolvedores, mas agora faz parte da oferta de serviços da MongoDB, Inc. Portanto, se você estiver procurando por serviços de banco de dados MongoDB na nuvem, é uma boa ideia considerar as opções oferecidas pela MongoDB Atlas ou outros provedores de serviços de nuvem. Certifique-se de verificar as informações mais recentes, pois a situação pode ter evoluído desde minha última atualização.