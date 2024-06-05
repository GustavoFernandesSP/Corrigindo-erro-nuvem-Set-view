const express = require("express");

const router = express.Router();

const processoController = require("../controllers/processoController")



router.get("/getAllProcess" , (req,res)=>{
    processoController.getAllProcess(req,res)
})

router.post("/settingProcess/:idProcess" , (req,res)=>{
    processoController.setProcess(req,res)
})

router.get("/getAllAllowed/:idEmpresa" , (req,res)=>{
    processoController.allowed(req,res)
})





module.exports = router;