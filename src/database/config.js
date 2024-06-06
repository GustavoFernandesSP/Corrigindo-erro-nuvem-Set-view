var mysql = require("mysql2");
var sql = require('mssql');

//  ATENÇÃ ATENÇÃ ATENÇÃO !!!!!!!!!!altere pra senha do mysql da sua maquina //
//  ATENÇÃ ATENÇÃ ATENÇÃO !!!!!!!!!!altere pra senha do mysql da sua maquina //
//  ATENÇÃ ATENÇÃ ATENÇÃO !!!!!!!!!!altere pra senha do mysql da sua maquina //
//  ATENÇÃ ATENÇÃ ATENÇÃO !!!!!!!!!!altere pra senha do mysql da sua maquina //
//  ATENÇÃ ATENÇÃ ATENÇÃO !!!!!!!!!!altere pra senha do mysql da sua maquina //
//  ATENÇÃ ATENÇÃ ATENÇÃO !!!!!!!!!!altere pra senha do mysql da sua maquina //
//  ATENÇÃ ATENÇÃ ATENÇÃO !!!!!!!!!!altere pra senha do mysql da sua maquina //
//  ATENÇÃ ATENÇÃ ATENÇÃO !!!!!!!!!!altere pra senha do mysql da sua maquina //


// CONEXÃO DO MYSQL DEV EDUARDO MELO(BACK-END)
var mySqlConfig = {
    host: "localhost",
    database: "securityWings",
    user: "root",
    password: "1033",  
};



// CONEXÃO DO MYSQL DEV LUCA SENA(FRONT-END)
// var mySqlConfig = {
//     host: "localhost",
//     database: "securitywings",
//     user: "root",
//     password: "#Gf46526937888", 
// };


// CONEXÃO DO MYSQL NA NUVEM AWS
// var mySqlConfig = {
//     host: "",
//     database: "",
//     user: "",
//     password: "", 
// };

 // conexão com o banco SQL 
 var sqlServerConfig = {
     user: 'sa',
     password: 'Urubu.100',
     server: '52.20.245.218', // endereço do servidor SQL
     database: 'securityWings',
     options: {
         encrypt: true, // Use true se você estiver conectando ao Azure SQL
         trustServerCertificate: true // Use true se você estiver conectando a um servidor local e precisar confiar no certificado
     }
 };



//  ATENÇÃO ATENÇÃO ATENÇÃO !!!!!!!!!!altere pra senha do mysql da sua maquina //
//  ATENÇÃO ATENÇÃO ATENÇÃO !!!!!!!!!!altere pra senha do mysql da sua maquina //
//  ATENÇÃO ATENÇÃO ATENÇÃO !!!!!!!!!!altere pra senha do mysql da sua maquina //
//  ATENÇÃO ATENÇÃO ATENÇÃO !!!!!!!!!!altere pra senha do mysql da sua maquina //
//  ATENÇÃO ATENÇÃO ATENÇÃO !!!!!!!!!!altere pra senha do mysql da sua maquina //
//  ATENÇÃO ATENÇÃO ATENÇÃO !!!!!!!!!!altere pra senha do mysql da sua maquina //
//  ATENÇÃO ATENÇÃO ATENÇÃO !!!!!!!!!!altere pra senha do mysql da sua maquina //
//  ATENÇÃO ATENÇÃO ATENÇÃO !!!!!!!!!!altere pra senha do mysql da sua maquina //



function executar(instrucao) {
    // VERIFICA A VARIÁVEL DE AMBIENTE SETADA EM app.js
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        return new Promise(function (resolve, reject) {
            sql.connect(sqlServerConfig).then(function () {
                return sql.query(instrucao);
            }).then(function (resultados) {
                console.log(resultados);
                resolve(resultados.recordset);
            }).catch(function (erro) {
                reject(erro);
                console.log('ERRO: ', erro);
            });
            sql.on('error', function (erro) {
                return ("ERRO NO SQL SERVER (Azure): ", erro);
            });
        });
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        return new Promise(function (resolve, reject) {
            var conexao = mysql.createConnection(mySqlConfig);
            conexao.connect();
            conexao.query(instrucao, function (erro, resultados) {
                conexao.end();
                if (erro) {
                    reject(erro);
                }
                console.log(resultados);
                resolve(resultados);
            });
            conexao.on('error', function (erro) {
                return ("ERRO NO MySQL WORKBENCH: ", erro.sqlMessage);
            });
        });
    } else {
        return new Promise(function (resolve, reject) {
            console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
            reject("AMBIENTE NÃO CONFIGURADO EM app.js")
        });
    }
}

module.exports = {
    executar
}
