
var database = require("../database/config")

function getAllProcess() {
    var instrucao = `SELECT 
    pr.idProcesso,
    pr.nomeAmigavel,  -- Adicione o campo nomeAmigavel
    pr.processoName AS nome_do_processo,
    c.categorias AS categoria_do_processo
FROM 
    processos pr
JOIN 
    categoria c ON pr.fkCategoria = c.idCategoria;;
`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


async function setProcess(idProcesso, isAllowed, idEmpresa, created_at) {
    const instrucao = 
        `EXEC SetProcess 
        @idProcesso = ${idProcesso}, 
        @isAllowed = ${isAllowed}, 
        @idEmpresa = ${idEmpresa}, 
        @created_at = '${created_at}';`
    ;

    try {
        await database.executar(instrucao);
        console.log("Permissão inserida/atualizada com sucesso.");
        return true;
    } catch (error) {
        console.log("Erro ao inserir/atualizar a permissão:", error);
        return false;
    }
}



function allowed(idEmpresa) {
    var instrucao = `EXEC GetLatestPermissoesByEmpresa @idEmpresa = '${idEmpresa}';`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);''
}





module.exports = {
    getAllProcess,
    setProcess,
    allowed
}