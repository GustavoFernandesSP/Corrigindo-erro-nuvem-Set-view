
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
    const instrucao = `
        INSERT INTO permissoes (fkEmpresa, fkProcesso, isAllowed, created_at) 
        VALUES ('${idEmpresa}', '${idProcesso}', '${isAllowed}', '${created_at}')
        ON DUPLICATE KEY UPDATE 
        isAllowed = VALUES(isAllowed);`;
    try {
        await database.executar(instrucao);
        console.log("Permissão inserida/atualizada com sucesso.");
        return true;
    } catch (error) {
        console.log("Erro ao inserir/atualizar a permissão:", error);
        return false;
    }
}



function allowed(idEmpresa){
    var instrucao = `
        SELECT *
        FROM permissoes
        WHERE idPermissao IN (
            SELECT MAX(idPermissao)
            FROM permissoes
            WHERE fkEmpresa = '${idEmpresa}'
            GROUP BY fkProcesso
        )
        ORDER BY created_at DESC;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}





module.exports = {
    getAllProcess,
    setProcess,
    allowed
}