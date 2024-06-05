const processoModel = require("../models/processoModel")


function getAllProcess(_, res) {

    processoModel.getAllProcess()
        .then((resposta) => {
            if (resposta.lenght > 0) {
                res.status(200).json(resposta)
            } else {
                res.status(201).json(resposta)
            }
        }).catch((erro) => {
            console.log("Deu erro:", erro)
            res.status(500).json({ message: `deu o erro ${erro}` })
        })


}


function setProcess(req, res) {
    var id = req.params.idProcess;
    var isAllowed = req.body.isAllowed;
    var idEmpresa = req.body.idEmpresa;
    var created_at = req.body.created_at
    console.log(created_at)

    console.log(id, isAllowed, idEmpresa, created_at);

    processoModel.setProcess(id, isAllowed, idEmpresa, created_at)
        .then((resposta) => {
            res.status(200).json(resposta);
        })
        .catch((erro) => {
            console.log("Deu erro:", erro);
            res.status(500).json({ message: `deu o erro ${erro}` });
        });
}




function allowed(req,res){
    var idEmpresa = req.params.idEmpresa

    processoModel.allowed(idEmpresa)
    .then((resposta)=>{
       
            res.status(200).json(resposta)
       
    }).catch((erro)=>{
        console.log("Deu erro:", erro)
            res.status(500).json({ message: `deu o erro ${erro}` })
    })
}



module.exports = {
    getAllProcess,
    setProcess,
    allowed

}