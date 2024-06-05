const database = require("../database/config");

function paramsRam(idEmpresa, warning, danger) {
    const instrucao = `
        INSERT INTO parametrosDeAlerta (ramWarning, ramDanger, idEmpresa) 
        SELECT '${warning}', '${danger}', '${idEmpresa}' 
        FROM dual
        WHERE NOT EXISTS (SELECT * FROM parametrosDeAlerta WHERE idEmpresa = '${idEmpresa}')
        UNION ALL
        SELECT '${warning}', '${danger}', '${idEmpresa}'
        FROM parametrosDeAlerta
        WHERE idEmpresa = '${idEmpresa}'
        ON DUPLICATE KEY UPDATE 
        ramWarning = VALUES(ramWarning), 
        ramDanger = VALUES(ramDanger);`;
    return database.executar(instrucao).then(() => {
        console.log(instrucao);
    });
}

function paramsProcessador(idEmpresa, warning, danger) {
    const instrucao = `
        INSERT INTO parametrosDeAlerta (processadorWarning, processadorDanger, idEmpresa) 
        SELECT '${warning}', '${danger}', '${idEmpresa}' 
        FROM dual
        WHERE NOT EXISTS (SELECT * FROM parametrosDeAlerta WHERE idEmpresa = '${idEmpresa}')
        UNION ALL
        SELECT '${warning}', '${danger}', '${idEmpresa}'
        FROM parametrosDeAlerta
        WHERE idEmpresa = '${idEmpresa}'
        ON DUPLICATE KEY UPDATE 
        processadorWarning = VALUES(processadorWarning), 
        processadorDanger = VALUES(processadorDanger);`;
    return database.executar(instrucao).then(() => {
        console.log(instrucao);
    });
}

function paramsRede(idEmpresa, warning, danger) {
    const instrucao = `
        INSERT INTO parametrosDeAlerta (internetWarning, internetDanger, idEmpresa) 
        SELECT '${warning}', '${danger}', '${idEmpresa}' 
        FROM dual
        WHERE NOT EXISTS (SELECT * FROM parametrosDeAlerta WHERE idEmpresa = '${idEmpresa}')
        UNION ALL
        SELECT '${warning}', '${danger}', '${idEmpresa}'
        FROM parametrosDeAlerta
        WHERE idEmpresa = '${idEmpresa}'
        ON DUPLICATE KEY UPDATE 
        internetWarning = VALUES(internetWarning), 
        internetDanger = VALUES(internetDanger);`;
    return database.executar(instrucao).then(() => {
        console.log(instrucao);
    });
}

function paramsDisco(idEmpresa, warning, danger) {
    const instrucao = `
        INSERT INTO parametrosDeAlerta (discoWarning, discoDanger, idEmpresa) 
        SELECT '${warning}', '${danger}', '${idEmpresa}' 
        FROM dual
        WHERE NOT EXISTS (SELECT * FROM parametrosDeAlerta WHERE idEmpresa = '${idEmpresa}')
        UNION ALL
        SELECT '${warning}', '${danger}', '${idEmpresa}'
        FROM parametrosDeAlerta
        WHERE idEmpresa = '${idEmpresa}'
        ON DUPLICATE KEY UPDATE 
        discoWarning = VALUES(discoWarning), 
        discoDanger = VALUES(discoDanger);`;
    return database.executar(instrucao).then(() => {
        console.log(instrucao);
    });
}

function getAllparams(idEmpresa) {
    const instrucao = `SELECT * FROM parametrosDeAlerta WHERE idEmpresa = '${idEmpresa}'`;
    return database.executar(instrucao);
}

function deleteProcessador(idEmpresa) {
    const instrucao = `UPDATE parametrosDeAlerta SET processadorWarning = NULL, processadorDanger = NULL WHERE idEmpresa = '${idEmpresa}'`;
    return database.executar(instrucao);
}

function deleteRam(idEmpresa) {
    const instrucao = `UPDATE parametrosDeAlerta SET RamWarning = NULL, RamDanger = NULL WHERE idEmpresa = '${idEmpresa}'`;
    return database.executar(instrucao);
}

function deleteDisco(idEmpresa) {
    const instrucao = `UPDATE parametrosDeAlerta SET discoWarning = NULL, discoDanger = NULL WHERE idEmpresa = '${idEmpresa}'`;
    return database.executar(instrucao);
}


function deleteRede(idEmpresa){
    const instrucao = `UPDATE parametrosDeAlerta SET internetWarning = NULL, internetDanger = NULL WHERE idEmpresa = '${idEmpresa}'`;
    return database.executar(instrucao);
}

module.exports = {
    paramsRam,
    paramsRede,
    paramsProcessador,
    paramsDisco,
    getAllparams,
    deleteProcessador,
    deleteRam,
    deleteDisco,
    deleteRede,
};
