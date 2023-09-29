# INSTALANDO O MYSQL
Para instalar o MySQL em seu sistema, você pode seguir os passos apropriados para o seu sistema operacional específico. Aqui, abordarei a instalação do MySQL no Windows, macOS e Linux (usando o Ubuntu como exemplo).

**Nota**: Certifique-se de ter privilégios de administrador (ou sudo, no caso do Linux) em seu sistema para realizar a instalação.

## Instalação do MySQL no Windows:
1. **Faça o download do MySQL Installer para Windows**: Vá para o [site oficial do MySQL](https://dev.mysql.com/downloads/installer/) e baixe a versão do MySQL Installer para Windows.

2. **Execute o Instalador**: Execute o arquivo de instalação que você baixou. Ele iniciará o MySQL Installer, que permite selecionar os componentes que deseja instalar.

3. **Escolha os Componentes**: Selecione "MySQL Server" como um dos componentes a serem instalados. Você também pode escolher instalar outras ferramentas e utilitários MySQL, como o MySQL Workbench.

4. **Configuração do Servidor**: Durante a instalação, você será solicitado a configurar uma senha para a conta "root" do MySQL. Anote essa senha, pois você precisará dela mais tarde.

5. **Conclua a Instalação**: Continue com o processo de instalação, aceitando as configurações padrão ou personalizando-as conforme necessário. Depois de concluir a instalação, o MySQL estará em execução em seu sistema.

## Instalação do MySQL no macOS:
No macOS, você pode instalar o MySQL usando o Homebrew, um gerenciador de pacotes popular. Certifique-se de ter o Homebrew instalado em seu sistema antes de prosseguir.

1. **Instale o Homebrew (se ainda não o tiver)**: Abra o Terminal e execute o seguinte comando para instalar o Homebrew:

   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Instale o MySQL**: Depois de instalar o Homebrew, você pode instalar o MySQL com o seguinte comando:

   ```bash
   brew install mysql
   ```

3. **Inicie o MySQL**: Você pode iniciar o MySQL com o seguinte comando:

   ```bash
   brew services start mysql
   ```

4. **Configuração do Servidor**: O MySQL deve estar em execução, e você pode acessá-lo usando o cliente de linha de comando. Normalmente, não é necessário configurar uma senha para a conta "root" no macOS.

## Instalação do MySQL no Linux (Ubuntu):
1. **Atualize a lista de pacotes**: Abra o Terminal e execute os seguintes comandos para garantir que sua lista de pacotes esteja atualizada:

   ```bash
   sudo apt update
   ```

2. **Instale o MySQL Server**: Execute o comando a seguir para instalar o MySQL Server:

   ```bash
   sudo apt install mysql-server
   ```

3. **Configuração do Servidor**: Durante a instalação, você será solicitado a configurar uma senha para a conta "root" do MySQL. Anote essa senha, pois você precisará dela mais tarde.

4. **Inicie o MySQL**: Após a instalação, inicie o MySQL e habilite-o para iniciar automaticamente durante a inicialização:

   ```bash
   sudo systemctl start mysql
   sudo systemctl enable mysql
   ```

5. **Verifique o Status do MySQL**: Você pode verificar o status do MySQL com o seguinte comando:

   ```bash
   sudo systemctl status mysql
   ```

O MySQL agora está instalado em seu sistema Linux.

Lembre-se de que essas são instruções gerais para instalar o MySQL em sistemas Windows, macOS e Linux (Ubuntu). Os detalhes podem variar dependendo da versão específica do MySQL ou da distribuição Linux que você está usando. Certifique-se de seguir a documentação oficial ou as instruções específicas do sistema operacional, se necessário.

## CONFIGURAÇÕES:
É necessário adicionar o diretório binário do MySQL ao seu caminho (PATH) do sistema. Isso permitirá que você execute comandos MySQL de qualquer local no prompt de comando sem precisar especificar o caminho completo para o executável.

Aqui estão os passos para adicionar o diretório binário do MySQL ao seu caminho (PATH) no Windows:

1. **Encontre o Diretório Binário do MySQL**: O diretório binário do MySQL geralmente está localizado em algum lugar como `C:\Program Files\MySQL\MySQL Server X.Y\bin`, onde `X.Y` é a versão específica do MySQL que você instalou.

2. **Abra as Configurações do Sistema**: Pressione as teclas `Windows + R` para abrir a caixa de diálogo "Executar". Digite `sysdm.cpl` e pressione Enter. Isso abrirá as Propriedades do Sistema.

3. **Acesse as Variáveis de Ambiente**: Na guia "Avançado", clique no botão "Variáveis de Ambiente".

4. **Edite o PATH do Sistema**: Na seção "Variáveis do Sistema", role para baixo até encontrar a variável "Path" (ou "PATH"). Selecione-a e clique em "Editar...".

5. **Adicione o Diretório Binário do MySQL**: Clique em "Novo" e adicione o caminho completo para o diretório binário do MySQL que você encontrou no passo 1.

6. **Confirme e Feche as Janelas**: Clique em "OK" para fechar todas as janelas de configuração.

7. **Reinicie o Prompt de Comando**: Feche e reabra o prompt de comando (CMD) para que as alterações no PATH entrem em vigor.

Agora, você deve ser capaz de acessar os comandos do MySQL diretamente no prompt de comando de qualquer local, sem especificar o caminho completo para o executável. Por exemplo, você pode usar comandos como `mysql`, `mysqladmin`, entre outros.

Lembre-se de que é importante ter cuidado ao usar comandos do MySQL, especialmente quando se trata de administração de bancos de dados, para evitar a perda acidental de dados. Certifique-se de ter a senha do usuário "root" do MySQL à mão para autenticação, se necessário.

## ENTRADO VIA CMD:
Digite no CMD:
```bash
mysql -h localhost -u root -p
```