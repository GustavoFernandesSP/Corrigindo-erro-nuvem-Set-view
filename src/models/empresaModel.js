var database = require("../database/config")

function autenticar(email, senha) {
    var instrucao = `SELECT idEmpresa, nome, email FROM Empresa WHERE email = '${email}' AND senha = '${senha}';`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nomeEmpresa, cnpj, telefone, cidade, bairro, uf, rua, cep, comp) {
    var instrucao = `INSERT INTO Empresa (nome, cnpj, telefone) VALUES ('${nomeEmpresa}', '${cnpj}', '${telefone}');`;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao)
        .then(resultado => {
            if (resultado.affectedRows > 0) {
                var idEmpresaInserida = resultado.insertId;

                var instrucaoEndereco = `INSERT INTO Endereco (cidade, bairro, uf, rua, cep, complemento, fkEmpresa) VALUES ('${cidade}', '${bairro}', '${uf}', '${rua}', '${cep}', '${comp}', ${idEmpresaInserida});`;

                console.log("Executando a instrução SQL do Endereço: \n" + instrucaoEndereco);

                return database.executar(instrucaoEndereco);
            } else {
                throw new Error("Não foi possível inserir a empresa.");
            }
        });
}



module.exports = {
    autenticar,
    cadastrar
};