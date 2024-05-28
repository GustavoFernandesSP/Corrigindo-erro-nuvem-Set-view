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

router.put("/putRam/:idEmpresa" ,(req,res)=>{
    alertaController.putRam(req,res);
})

router.put("/putProcessador/:idEmpresa" ,(req,res)=>{
    alertaController.putProcessador(req,res);
})

router.put("/putRede/:idEmpresa" ,(req,res)=>{
    alertaController.putRede(req,res);
})

router.put("/putDisco/:idEmpresa" ,(req,res)=>{
    alertaController.putDisco(req,res);
})








module.exports = router;