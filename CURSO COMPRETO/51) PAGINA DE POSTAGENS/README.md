# PAGINA DE POSTAGENS
Para melhorar o visual da página de postagem, você pode adicionar CSS e talvez algumas bibliotecas de estilo, como o Bootstrap, para estilizar seus componentes. Aqui está um exemplo de como você pode melhorar a aparência da página de postagem:

1. **Adicione o Bootstrap**:

   Primeiro, você pode adicionar o Bootstrap ao seu projeto. Você já instalou o Bootstrap como um arquivo estático, então você pode incluí-lo nas páginas HTML. Certifique-se de que o Bootstrap está vinculado corretamente em seu arquivo de layout ou página de postagem.

```html
<!-- No seu arquivo views/layouts/main.handlebars ou equivalente -->
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Blog</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-pzjw8f+ua7Kw1TIq0v8FqFjcJ6pajs/rfdfs3SO+k1W1GBkRD5Buj2v8zvH58d5P" crossorigin="anonymous">
</head>
<body>
    {{{body}}}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>
</html>
```

2. **Estilize a Página de Postagem**:

   Agora você pode adicionar classes do Bootstrap e seu próprio CSS para melhorar o visual da página de postagem. Aqui está um exemplo de como você pode estilizar um formulário de postagem:

```html
<!-- views/posts/new.handlebars ou equivalente -->
<h2>Nova Postagem</h2>
<hr>

<form method="POST" action="/admin/posts">
    <div class="mb-3">
        <label for="title" class="form-label">Título</label>
        <input type="text" class="form-control" id="title" name="title" required>
    </div>

    <div class="mb-3">
        <label for="content" class="form-label">Conteúdo</label>
        <textarea class="form-control" id="content" name="content" rows="4" required></textarea>
    </div>

    <button type="submit" class="btn btn-primary">Publicar</button>
</form>
```

3. **Adicione Seu Próprio CSS**:

   Você também pode criar seu próprio arquivo CSS para personalizar ainda mais o estilo do seu site. Por exemplo, você pode criar um arquivo `styles.css` e vinculá-lo ao seu layout principal.

```html
<!-- No seu arquivo views/layouts/main.handlebars ou equivalente -->
<head>
    <!-- ... Outras tags de cabeçalho ... -->
    <link rel="stylesheet" href="/css/styles.css">
</head>
```

4. **Estilize com CSS Personalizado**:

   No arquivo `styles.css`, você pode adicionar suas próprias regras de estilo personalizado para ajustar a aparência dos elementos do seu site. Por exemplo:

```css
/* styles.css */
/* Estilos personalizados para o site */

/* Estilo para o formulário de postagem */
.form-label {
    font-weight: bold;
}

.btn-primary {
    background-color: #007bff;
    border-color: #007bff;
}

.btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
}
```

Isso é apenas um exemplo simples para ilustrar como você pode melhorar o visual da sua página de postagem. Você pode personalizar ainda mais de acordo com suas preferências e requisitos de design. Certifique-se de ajustar as classes do Bootstrap e as regras de estilo de acordo com suas necessidades.