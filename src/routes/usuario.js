var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/cadastrarFunc", function (req, res) {
    usuarioController.cadastrarFunc(req, res);
});

router.post("/listarFunc", function (req, res) {
    usuarioController.listarFunc(req, res);
});

router.post("/findEmpresaById", function (req, res) {
    usuarioController.findEmpresaById(req, res);
});


router.delete("/deletarFunc/:idVar", function (req, res) {
    usuarioController.deletarFunc(req, res);
});

router.put("/editarFunc", function (req, res) {
    usuarioController.editarFunc(req, res);
});

module.exports = router;