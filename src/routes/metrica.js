var express = require("express");
var router = express.Router();

var metricaController = require("../controllers/metricaController");

router.post("/findMachineId/:idEmpresa/:idUser", function (req, res) {
    metricaController.findMachineId(req, res);
})

router.post("/getMachineData/:idMachine", function (req, res) {
    metricaController.getMachineData(req, res);
})


router.post("/getAllMachinesByIdEmpresa/:idEmpresa" , function (req,res) {
    metricaController.getAllMachinesByIdEmpresa(req,res);
})

router.post("/dataCompair/:ids", function (req, res) {
    metricaController.dataCompair(req, res);
});





module.exports = router; 