# COMO INSTALAR O NODEJS?
Para instalar o Node.js no seu sistema, você pode seguir os passos apropriados para o sistema operacional que você está usando. Aqui estão as instruções gerais para sistemas Windows, macOS e Linux:

## **Windows:**
1. Acesse o site oficial do Node.js em [nodejs.org](https://nodejs.org/).

2. Na página inicial, você verá duas versões para download: a versão LTS (Long Term Support) e a versão mais recente. A versão LTS é geralmente a mais estável e é recomendada para a maioria dos usuários. Clique no botão "LTS" ou "Current", dependendo da sua preferência.

3. Após clicar na versão desejada, o arquivo de instalação será baixado automaticamente. Execute o arquivo baixado (geralmente com extensão .msi).

4. Siga o assistente de instalação, aceitando os termos de uso e escolhendo as configurações padrão, a menos que você tenha razões específicas para alterá-las.

5. Após a instalação, abra o seu terminal (Prompt de Comando ou PowerShell) e digite `node -v` para verificar se o Node.js foi instalado com sucesso. Em seguida, digite `npm -v` para verificar a versão do gerenciador de pacotes npm.

## **macOS:**
1. Acesse o site oficial do Node.js em [nodejs.org](https://nodejs.org/).

2. Na página inicial, você verá duas versões para download: a versão LTS (Long Term Support) e a versão mais recente. A versão LTS é geralmente a mais estável e é recomendada para a maioria dos usuários. Clique no botão "LTS" ou "Current", dependendo da sua preferência.

3. Após clicar na versão desejada, o arquivo de instalação será baixado automaticamente. Execute o arquivo baixado (geralmente com extensão .pkg).

4. Siga o assistente de instalação, aceitando os termos de uso e escolhendo as configurações padrão, a menos que você tenha razões específicas para alterá-las.

5. Após a instalação, abra o Terminal e digite `node -v` para verificar se o Node.js foi instalado com sucesso. Em seguida, digite `npm -v` para verificar a versão do gerenciador de pacotes npm.

## **Linux (Ubuntu/Debian):**
Para sistemas baseados em Debian, você pode instalar o Node.js e o npm usando o gerenciador de pacotes `apt`. Abra o Terminal e execute os seguintes comandos:

1. Atualize o cache do repositório:

```bash
sudo apt update
```

2. Instale o Node.js e o npm:

```bash
sudo apt install nodejs npm
```

3. Verifique as versões instaladas:

```bash
node -v
npm -v
```

Isso deve instalar o Node.js e o npm no seu sistema Linux.

Lembrando que as etapas podem variar um pouco dependendo da distribuição Linux que você está usando. Certifique-se de consultar a documentação oficial da distribuição se estiver usando algo diferente do Ubuntu/Debian.

Após a instalação bem-sucedida do Node.js e do npm, você estará pronto para começar a desenvolver com Node.js no seu sistema.