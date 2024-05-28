var database = require("../database/config")


function listarEmpresa() {
    var instrucaoSql = `SELECT * FROM Empresa`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function listarAdmin(idEmpresa) {
    var instrucaoSql = `SELECT idUsuario, nome,cpf,email,isAdmin FROM usuario WHERE fkEmpresa = '${idEmpresa}' AND isAdmin = true;`
    return database.executar(instrucaoSql);

}



function deletarAdmin(idVar) {
    var instrucaoSql = `DELETE FROM usuario WHERE idUsuario = '${idVar}';`;
    return database.executar(instrucaoSql);

}

function revogarAdmin(idVar) {
    var instrucaoSql = `UPDATE usuario SET isAdmin = false WHERE idUsuario = '${idVar}';`
    return database.executar(instrucaoSql);
}

function cadastrarAdmin(nome, email, senha, idEmpresa, isAdmin, cpf) {

    var instrucaoSql = `
        INSERT INTO usuario (nome, cpf,email,isAdmin,senha,fkEmpresa) VALUES ('${nome}','${cpf}','${email}','${isAdmin}', '${senha}','${idEmpresa}');`;
    return database.executar(instrucaoSql);
}





module.exports = {
    listarEmpresa,
    listarAdmin,
    deletarAdmin,
    revogarAdmin,
    cadastrarAdmin

};