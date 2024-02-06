# INSTALANDO O MONGODB
Para instalar o MongoDB em seu sistema, siga as instruções abaixo com base no sistema operacional que você está usando.

## Windows:
1. Acesse o site oficial do MongoDB: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community).

2. Role para baixo até a seção "Community Server" e clique no botão "Download".

3. Escolha a versão do MongoDB desejada (geralmente a versão mais recente) e clique em "Download (msi)" para a versão de instalação do Windows.

4. Execute o arquivo MSI que você baixou e siga as instruções do assistente de instalação. Certifique-se de marcar a opção "Install MongoDB as a service" para que o MongoDB seja instalado como um serviço do Windows.

5. Após a conclusão da instalação, você pode abrir um terminal (Prompt de Comando) e executar o MongoDB digitando `mongod`.

## macOS:
1. Você pode usar o Homebrew para instalar o MongoDB. Certifique-se de ter o Homebrew instalado em seu sistema. Se você ainda não tiver, instale-o seguindo as instruções em [https://brew.sh/](https://brew.sh/).

2. Abra o Terminal e execute o seguinte comando para instalar o MongoDB:

   ```
   brew tap mongodb/brew
   brew install mongodb-community
   ```

3. Após a conclusão da instalação, inicie o MongoDB executando o seguinte comando:

   ```
   brew services start mongodb/brew/mongodb-community
   ```

## Linux (Ubuntu):
1. Abra o Terminal.

2. Adicione a chave GPG do repositório MongoDB:

   ```
   wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
   ```

3. Adicione o repositório MongoDB ao seu sistema:

   ```
   echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
   ```

   Certifique-se de substituir "focal" pela versão do Ubuntu que você está usando, se for diferente.

4. Atualize o índice de pacotes do sistema:

   ```
   sudo apt-get update
   ```

5. Instale o MongoDB:

   ```
   sudo apt-get install -y mongodb-org
   ```

6. Inicie o serviço MongoDB:

   ```
   sudo systemctl start mongod
   ```

Agora, o MongoDB está instalado e em execução em seu sistema. Você pode interagir com ele usando o shell do MongoDB executando o comando `mongo` em um terminal.

Lembre-se de consultar a documentação oficial do MongoDB para obter informações adicionais sobre a configuração e o uso: [https://docs.mongodb.com/](https://docs.mongodb.com/)

Certifique-se de adaptar as instruções à sua versão específica do sistema operacional, pois podem ocorrer alterações nas versões futuras.

# CONFIGURAÇÕES:
É necessário adicionar o diretório binário do Mongo ao seu caminho (PATH) do sistema. Isso permitirá que você execute comandos Mongo de qualquer local no prompt de comando sem precisar especificar o caminho completo para o executável.

Aqui estão os passos para adicionar o diretório binário do Mongo ao seu caminho (PATH) no Windows:

1. **Encontre o Diretório Binário do Mongo**: O diretório binário do Mongo geralmente está localizado em algum lugar como `C:\Program Files\Mongo\Mongo Server X.Y\bin`, onde `X.Y` é a versão específica do Mongo que você instalou.

2. **Abra as Configurações do Sistema**: Pressione as teclas `Windows + R` para abrir a caixa de diálogo "Executar". Digite `sysdm.cpl` e pressione Enter. Isso abrirá as Propriedades do Sistema.

3. **Acesse as Variáveis de Ambiente**: Na guia "Avançado", clique no botão "Variáveis de Ambiente".

4. **Edite o PATH do Sistema**: Na seção "Variáveis do Sistema", role para baixo até encontrar a variável "Path" (ou "PATH"). Selecione-a e clique em "Editar...".

5. **Adicione o Diretório Binário do Mongo**: Clique em "Novo" e adicione o caminho completo para o diretório binário do Mongo que você encontrou no passo 1.

6. **Confirme e Feche as Janelas**: Clique em "OK" para fechar todas as janelas de configuração.

7. **Reinicie o Prompt de Comando**: Feche e reabra o prompt de comando (CMD) para que as alterações no PATH entrem em vigor.

Agora, você deve ser capaz de acessar os comandos do Mongo diretamente no prompt de comando de qualquer local, sem especificar o caminho completo para o executável. Por exemplo, você pode usar comandos como `Mongo`, `Mongoadmin`, entre outros.

Lembre-se de que é importante ter cuidado ao usar comandos do Mongo, especialmente quando se trata de administração de bancos de dados, para evitar a perda acidental de dados. Certifique-se de ter a senha do usuário "root" do Mongo à mão para autenticação, se necessário.

## ENTRADO VIA CMD:
Crie uma pasta: `c:/data/db`
Digite no CMD:
```bash
mongod
```
```bash
mongo
```