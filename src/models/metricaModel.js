var database = require("../database/config")

function findMachineId(fkEmpresa,fkUsuario) {
    
    
    var instrucao = `SELECT idComputador from ComputadorEspec WHERE fkEmpresa = '${fkEmpresa}' and fkUsuario = '${fkUsuario}'; `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function getMachineData(idMachine){
    var instrucao = `SELECT * FROM Monitoramento WHERE fkComputador = '${idMachine}' ORDER BY idMonitoramento DESC LIMIT 8;`
    return database.executar(instrucao);
}

function getAllMachinesByIdEmpresa(idEmpresa){
    var instrucao = `SELECT CE.idComputador, CE.processadorModelo, CE.processadorNucleosFisicos, CE.processadorNucleosLógicos,
       CE.processadorFrequencia, CE.discoTotal, CE.ramTotal,
       M.processadorUso, M.ramUso, M.discoUso, M.bytesEnviados, M.bytesRecebidos, M.dataCaptura,
       PA.ramWarning, PA.ramDanger, PA.processadorWarning, PA.processadorDanger,
       PA.internetWarning, PA.internetDanger, PA.discoWarning, PA.discoDanger,
       U.nome AS nomeUsuario
FROM ComputadorESpec CE
JOIN (
    SELECT fkComputador, MAX(dataCaptura) AS ultimaCaptura
    FROM Monitoramento
    GROUP BY fkComputador
) ultimaMonitoramento ON CE.idComputador = ultimaMonitoramento.fkComputador
JOIN Monitoramento M ON ultimaMonitoramento.fkComputador = M.fkComputador 
                      AND ultimaMonitoramento.ultimaCaptura = M.dataCaptura
LEFT JOIN parametrosDeAlerta PA ON CE.fkEmpresa = PA.idEmpresa
JOIN usuario U ON CE.fkUsuario = U.idUsuario
WHERE CE.fkEmpresa = '${idEmpresa}';
;
    `
    return database.executar(instrucao);

}







module.exports = {
    findMachineId,
    getMachineData,
    getAllMachinesByIdEmpresa,

    
};