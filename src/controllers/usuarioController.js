var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;


    usuarioModel.autenticar(email, senha)
        .then(
            function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); 

                if (resultadoAutenticar.length >= 1) {
                    console.log(resultadoAutenticar);


                    res.json({
                        idUsuario: resultadoAutenticar[0].idUsuario,
                        email: resultadoAutenticar[0].email,
                        nome: resultadoAutenticar[0].nome,
                        senha: resultadoAutenticar[0].senha,
                        isAdmin: resultadoAutenticar[0].isAdmin,
                        isManager: resultadoAutenticar[0].isManager,
                        fkEmpresa: resultadoAutenticar[0].fkEmpresa,

                    });

                    

                } else if (resultadoAutenticar.length == 0) {
                    res.status(403).send("deu ruim, email e senhas não cadastrados")
                }

            });

}


function listarFunc(req, res) {

    var idEmpresa = req.body.idEmpresaServer



    usuarioModel.listarFunc(idEmpresa)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );


}



function editarFunc(req, res) {
    var id = req.body.idUsuarioServer;
    var novoEmail = req.body.novoEmailServer;
    var novaSenha = req.body.novaSenhaServer;


    usuarioModel.editarFunc(id, novoEmail, novaSenha)
        .then(function (resultado) { 
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
               
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );


}


function cadastrarFunc(req, res) {

    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var idEmpresa = req.body.idEmpresaServer;
    var isAdmin = req.body.isAdminServer;
    var cpf = req.body.cpfServer;

    usuarioModel.cadastrarFunc(nome, email, senha, idEmpresa, isAdmin, cpf)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function deletarFunc(req, res) {

    var id = req.params.idVar;



    usuarioModel.deletarFunc(id)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
            }
        );
}

function findEmpresaById(req, res) {

    var idEmpresaVar = req.body.idEmpresaServer;

    usuarioModel.findEmpresaById(idEmpresaVar)
        .then(
            function (resultadoAutenticar) {

                if (resultadoAutenticar.length >= 1) {
                  
                    res.json({     
                        nomeEmpresa: resultadoAutenticar[0].nome
                    });

                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
            }
        );
}






module.exports = {
    autenticar,
    cadastrarFunc,
    listarFunc,
    deletarFunc,
    editarFunc,
    findEmpresaById

}