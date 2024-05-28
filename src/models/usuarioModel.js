var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUsuario, nome,isAdmin,email,isManager,fkEmpresa FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function cadastrarFunc(nome, email, senha, idEmpresa,isAdmin,cpf) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, cpf,email,isAdmin, senha,fkEmpresa) VALUES ('${nome}','${cpf}','${email}','${isAdmin}', '${senha}','${idEmpresa}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function listarFunc(idEmpresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = ` SELECT * FROM usuario WHERE fkEmpresa = '${idEmpresa}'`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function deletarFunc(idUser) {

    var instrucaoSql = `
     DELETE FROM usuario WHERE idUsuario = ${idUser};

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function editarFunc(idUser,novoEmail,novaSenha) {

    var instrucaoSql = `
    UPDATE usuario
    SET email = '${novoEmail}', senha = '${novaSenha}'
    WHERE idUsuario = ${idUser};

    `;
    // console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function findEmpresaById(idEmpresaVar){
    var instrucaoSql = `SELECT nome FROM Empresa WHERE idEmpresa = '${idEmpresaVar}'`
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrarFunc,
    listarFunc,
    deletarFunc,
    editarFunc,
    findEmpresaById
};