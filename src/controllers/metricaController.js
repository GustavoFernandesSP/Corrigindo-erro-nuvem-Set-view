var metricaModel = require("../models/metricaModel");

function findMachineId(req, res) {
    var IdEmpresa = req.params.idEmpresa;
    var idUser = req.params.idUser;


    metricaModel.findMachineId(IdEmpresa, idUser)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.json({
                    idComputador: resultado[0].idComputador
                })

                console.log("dados do id da maquina: " + resultado)
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });

}

function getMachineData(req, res) {
    var idMachine = req.params.idMachine;

    metricaModel.getMachineData(idMachine)
        .then(function (resultado) {
            if (resultado.length > 0) {
              res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });

}

function getAllMachinesByIdEmpresa(req,res){
    var idEmpresa = req.params.idEmpresa;

    console.log(idEmpresa, "id da empresa")
   
    metricaModel.getAllMachinesByIdEmpresa(idEmpresa)
    .then(function (resultado) {
        if (resultado.length > 0) {
          res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
 
}






module.exports = {

    findMachineId,
    getMachineData,
    getAllMachinesByIdEmpresa,

}