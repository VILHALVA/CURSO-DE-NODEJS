module.exports = {
    eAdmin: function(req, res, next) {
        if(req.isAuthenticated() && req.user.eAdmin == 1) {
            return next();
        }
        else {
            req.flash("error-msg", "VOCÊ NÃO É ADMINISTRADOR!");
            res.redirect("/");
        }
    }
}