var alertaModel = require("../models/alertaModel");



function paramsRam(req, res) {
    var idEmpresa = req.params.idEmpresaServer;
    var warning = req.body.warningServer;
    var danger = req.body.dangerServer

    alertaModel.paramsRam(idEmpresa, warning, danger)
        .then((resultado) => {
            res.status(200).json(resultado)
        }).catch((erro) => {
            console.log(erro, "erro ao settar os parametros");
        })

}

function paramsProcessador(req, res) {
    var idEmpresa = req.params.idEmpresaServer;
    var warning = req.body.warningServer;
    var danger = req.body.dangerServer

    alertaModel.paramsProcessador(idEmpresa, warning, danger)
        .then((resultado) => {
            res.status(200).json(resultado)
        }).catch((erro) => {
            console.log(erro, "erro ao settar os parametros");
        })
}


function paramsDisco(req, res) {
    var idEmpresa = req.params.idEmpresaServer;
    var warning = req.body.warningServer;
    var danger = req.body.dangerServer

    alertaModel.paramsDisco(idEmpresa, warning, danger)
        .then((resultado) => {
            res.status(200).json(resultado)

        }).catch((erro) => {
            console.log(erro, "erro ao settar os parametros");
        })

}


function paramsRede(req, res) {
    var idEmpresa = req.params.idEmpresaServer;
    var warning = req.body.warningServer;
    var danger = req.body.dangerServer
    var overFlow = req.body.overFlowServer

    alertaModel.paramsRede(idEmpresa, warning, danger, overFlow)
        .then((resultado) => {
            res.status(200).json(resultado)
        }).catch((erro) => {
            console.log(erro, "erro ao settar os parametros")
        })
}


function getAllparams(req, res) {
    var IdEmpresa = req.params.idEmpresaServer;

    alertaModel.getAllparams(IdEmpresa)
        .then((resposta) => {
            if (resposta.length > 0) {
                res.status(200).json(resposta)
            } else {
                res.status(204).json(resposta)
            }
        }).catch((erro) => {
            console.log(erro ,"erro ao pegar todos parametros");
        })

}

function deleteRam(req, res) {

    var idEmpresa = req.params.idEmpresaServer
    alertaModel.deleteRam(idEmpresa)
        .then((resposta) => {
            res.status(200).json(resposta)
        }).catch((erro) => {
            console.log(erro, "ao deletar parametro")
        })

}

function deleteProcessador(req, res) {

    var idEmpresa = req.params.idEmpresaServer
    alertaModel.deleteProcessador(idEmpresa)
        .then((resposta) => {
            res.status(200).json(resposta)
        }).catch((erro) => {
            console.log(erro, "ao deletar parametro")
        })

}


function deleteRede(req, res) {

    var idEmpresa = req.params.idEmpresaServer
    alertaModel.deleteRam(idEmpresa)
        .then((resposta) => {
            res.status(200).json(resposta)
        }).catch((erro) => {
            console.log(erro, "ao deletar parametro")
        })

}



function deleteDisco(req, res) {

    var idEmpresa = req.params.idEmpresaServer
    alertaModel.deleteDisco(idEmpresa)
        .then((resposta) => {
            res.status(200).json(resposta)
        }).catch((erro) => {
            console.log(erro, "ao deletar parametro")
        })

}

function putRam(req, res) {

    var idEmpresa = req.params.idEmpresaServer
    var warning = req.body.warningServer;
    var danger = req.body.dangerServer

    alertaModel.putRam(idEmpresa, warning, danger)
        .then((resposta) => {
            res.status(200).json(resposta)
        }).catch((erro) => {
            console.log(erro, "erro ao atualizar parametro")
        })

}


function putProcessador(req, res) {

    var idEmpresa = req.params.idEmpresaServer
    var warning = req.body.warningServer;
    var danger = req.body.dangerServer

    alertaModel.putProcessador(idEmpresa, warning, danger)
        .then((resposta) => {
            res.status(200).json(resposta)
        }).catch((erro) => {
            console.log(erro, "erro ao atualizar parametro")
        })

}

function putDisco(req, res) {

    var idEmpresa = req.params.idEmpresaServer
    var warning = req.body.warningServer;
    var danger = req.body.dangerServer

    alertaModel.putDisco(idEmpresa, warning, danger)
        .then((resposta) => {
            res.status(200).json(resposta)
        }).catch((erro) => {
            console.log(erro, "erro ao atualizar parametro")
        })

}

function putRede(req, res) {

    var idEmpresa = req.params.idEmpresaServer
    var warning = req.body.warningServer;
    var danger = req.body.dangerServer
    var overFlow = req.body.overFlowServer

    alertaModel.putRede(idEmpresa, warning, danger, overFlow)
        .then((resposta) => {
            res.status(200).json(resposta)
        }).catch((erro) => {
            console.log(erro, "erro ao atualizar parametro")
        })

}


module.exports = {
    paramsRam,
    paramsProcessador,
    paramsDisco,
    paramsRede,
    getAllparams,
    deleteRam,
    deleteProcessador,
    deleteRede,
    deleteDisco


}