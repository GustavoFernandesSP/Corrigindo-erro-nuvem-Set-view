var express = require("express")
var router = express.Router()

var alertaController = require("../controllers/alertaController")

router.post("/paramsRam/:idEmpresa" , (req,res)=>{
    alertaController.paramsRam(req,res);
})

router.post("/paramsProcessador/:idEmpresa" , (req,res)=>{
    alertaController.paramsProcessador(req,res);
})

router.post("/paramsDisco/:idEmpresa" , (req,res) =>{
    alertaController.paramsDisco(req,res);
})

router.post("/paramsRede/:idEmpresa", (req,res)=>{
    alertaController.paramsRede(req,res);
})


router.get("/getAllparams/:idEmpresa" , (req,res) =>{
    alertaController.getAllparams(req,res);
})

router.delete("/deleteRam/:idEmpresa" , (req,res) =>{
    alertaController.deleteRam(req,res);
})

router.delete("/deleteProcessador/:idEmpresa" , (req,res)=>{
    alertaController.deleteProcessador(req,res);
})

router.delete("/deleteRede/:idEmpresa" , (req,res)=>{
    alertaController.deleteRede(req,res);
})


router.delete("/deleteDisco/:idEmpresa" , (req,res)=>{
    alertaController.deleteDisco(req,res);
})




router.get("/getAllParamsJSON/:idEmpresa", (req,res)=>{
    alertaController.getAllParamsJSON(req,res);
})








module.exports = router;