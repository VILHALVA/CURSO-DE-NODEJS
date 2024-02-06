const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require("../models/Categorias");
const Categoria = mongoose.model("categorias");
require("../models/Postagem");
const Postagem = mongoose.model("postagens");

router.get('/', (req, res) => {
    res.render(__dirname + '/../models/views/admin/index');
});

router.get('/posts', (req, res) => {
    res.send("PÁGINA DE POSTS");
});

router.get('/categorias', (req, res) => {
    Categoria.find().sort({date: 'desc'}).then((categorias) => {
        res.render("admin/categorias", {categorias: categorias});
    }).catch((err) => {
        req.flash("error_msg", "HOUVE UM ERRO AO LISTAR CATEGORIAS: "+err);
        res.redirect("/admin");
    });
});

router.get('/categorias/add', (req, res) => {
    res.render("admin/addcategorias");
});

router.post('/categorias/nova', (req, res) => {
    var erros = [];
    if (!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null) {
        erros.push({texto: "NOME INVÁLIDO!"});
    }

    if (req.body.nome.length < 2) {
        erros.push({texto: "NOME DA CATEGORIA É MUITO PEQUENO!"});
    }

    if (!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null) {
        erros.push({texto: "SLUG INVÁLIDO!"});
    }

    if (erros.length > 0) {
        res.render("admin/addcategorias", {erros: erros});
    }
    else {
        const novaCategoria = {
            nome: req.body.nome,
            slug: req.body.slug
        }
    
        new Categoria(novaCategoria).save().then(() => {
            req.flash("success_msg", "CATEGORIA SALVA COM SUCESSO!");
            res.redirect("/admin/categorias");
        }).catch((err) => {
            req.flash("error_msg", "ERRO AO SALVAR CATEGORIA! TENTE NOVAMENTE!");
            res.redirect("/admin");
        });
    }
});

router.get("/categorias/edit/:id", (req, res) => {
    Categoria.findOne({_id:req.params.id}).lean().then((categoria)=>{
        res.render('admin/editcategorias', {categoria:categoria})
    });
    res.render("admin/editcategorias");
});

router.post("categorias/edit", (req, res) => {
    Categoria.findOne({_id: req.body.id}).then((categoria) => {
        categoria.nome = req.body.nome;
        categoria.slug = req.body.slug;

        categoria().save().then(() => {
            req.flash("success_msg", "CATEGORIA EDITADA COM SUCESSO!");
            res.redirect("/admin/categorias");
        }).catch((err) => {
            req.flash("error_msg", "ERRO AO EDITAR CATEGORIA! TENTE NOVAMENTE!");
            res.redirect("/admin/categorias");
        });
    }).catch((err) => {
        req.flash("error_msg", "ERRO AO EDITAR CATEGORIA: "+err);
        res.redirect("/admin/categorias");

    });
});

router.post("categorias/deletar", (req, res) => {
    Categoria.remove({_id: req.body.id}).then(() => {
        req.flash("success_msg", "CATEGORIA DELETADA COM SUCESSO!");
            res.redirect("/admin/categorias");
        }).catch((err) => {
            req.flash("error_msg", "ERRO AO DELETAR CATEGORIA! TENTE NOVAMENTE!");
            res.redirect("/admin/categorias");
    });
});

router.get("/postagens", (req, res) => {
    Postagem.find().populate({path: 'categoria', strictPopulate: false}).sort({date: "desc"}).then((postagens) => {
        res.render("/admin/postagens", {postagens: postagens});
    }).catch((err) => {
        req.flash("error_msg", "ERRO AO LISTAR POSTAGENS!");
        res.redirect("/admin");
    });
});

router.get("/postagens/add", (req, res) => {
    Categoria.find().then((categorias) => {
        res.render("/admin/addpostagem", {categorias: categorias});
    }).catch((err) => {
        req.flash("error_msg", "ERRO AO CARREGAR FORMULÁRIO!");
        res.redirect("/admin");
    });
});

router.post("postagens/nova", (req, res) => {
    var erros = [];
    if (req.body.categoria == 0) {
        erros.push({texto: "CATEGORIA INVÁLIDA!"});
    }
    if (erros.length > 0) {
        res.render("admin/addpostagem", {erros: erros});
    }
    else {
        const novaPostagem = {
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            conteudo: req.body.conteudo,
            categoria: req.body.categoria,
            slug: req.body.slug
        }

        new Postagem(novaPostagem).save().then(() => {
            req.flash("success_msg", "POSTAGEM SALVA COM SUCESSO!");
            res.redirect("/admin/postagens");
        }).catch((err) => {
            req.flash("error_msg", "ERRO AO SALVAR POSTAGEM! TENTE NOVAMENTE!");
            res.redirect("/admin/postagens");
        });
    }
});

router.get("postagens/edit/:id", (req, res) => {
    Postagem.findOne({_id:req.params.id}).then((postagem)=>{
        res.render('admin/editpostagens', {postagem: postagem});

        Categoria.find().then((categorias) => {
            res.render("/admin/editpostagens", {categorias: categorias, postagem: postagem});
        }).catch((err) => {
            req.flash("error_msg", "ERRO AO LISTAR CATEGORIAS!");
            res.redirect("/admin/postagens");
        });

    }).catch((err) => {
        req.flash("error_msg", "ERRO AO CARREGAR FORMULARIO DE EDIÇÃO!");
        res.redirect("/admin/postagens");
    });
});

router.post("/postagem/edit", (req, res) => {
    Postagem.findOne({_id:req.body.id}).then((postagem)=>{
        res.render('admin/editpostagens', {postagem: postagem});

        Postagem.find().then((postagem) => {
            postagem.titulo = req.body.titulo,
            postagem.descricao = req.body.descricao,
            postagem.conteudo = req.body.conteudo,
            postagem.categoria = req.body.categoria,
            postagem.slug = req.body.slug 

            Postagem().save().then(() => {
                req.flash("success_msg", "POSTAGEM EDITADA COM SUCESSO!");
                res.redirect("/admin/postagens");
            }).catch((err) => {
                req.flash("error_msg", "ERRO AO EDITAR POSTAGEM! TENTE NOVAMENTE!");
                res.redirect("/admin/postagens");
            });
        }).catch((err) => {
            req.flash("error_msg", "ERRO AO SALVAR EDIÇÃO!");
            res.redirect("/admin/postagens");
        });

    });
});

module.exports = router;