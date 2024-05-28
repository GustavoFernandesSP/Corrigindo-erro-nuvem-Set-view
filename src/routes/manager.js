var express = require("express");
var router = express.Router();

var managerController = require("../controllers/managerController");



router.post("/cadastrarAdmin", function (req, res) {
    managerController.cadastrarAdmin(req, res);
});

router.post("/listarEmpresa", function (req, res) {
  managerController.listarEmpresa(req,res);
});

router.post("/listarAdmin", function (req, res) {
    managerController.listarAdmin(req,res);
  });


router.delete("/deletarAdmin/:idVar", function (req, res) {
    managerController.deletarAdmin(req, res);
});

router.put("/revogarAdmin/:idVar", function (req, res) {
    managerController.revogarAdmin(req, res);
});




module.exports = router;