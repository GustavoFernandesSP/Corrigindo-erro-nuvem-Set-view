var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT idEmpresa, nome, email FROM Empresa WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nomeEmpresa, cnpj, email, telefone, cidade, bairro, uf, rua, cep, comp, senha) {
    var instrucao = `
        INSERT INTO Empresa (nome, cnpj, email, telefone, senha) VALUES ('${nomeEmpresa}', '${cnpj}', '${email}', '${telefone}', '${senha}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao)
        .then(resultado => {
            // Verifica se houve inserção bem-sucedida
            if (resultado.affectedRows > 0) {
                // ID da empresa inserida
                var idEmpresaInserida = resultado.insertId;

                // Agora, insira o endereço com o ID da empresa correspondente
                var instrucaoEndereco = `
                    INSERT INTO Endereco (cidade, bairro, uf, rua, cep, complemento, fkEmpresa) 
                    VALUES ('${cidade}', '${bairro}', '${uf}', '${rua}', '${cep}', '${comp}', ${idEmpresaInserida});
                `;

                console.log("Executando a instrução SQL do Endereço: \n" + instrucaoEndereco);

                return database.executar(instrucaoEndereco);
            } else {
                throw new Error("Não foi possível inserir a empresa.");
            }
        });
}

module.exports = {
    cadastrar
};

module.exports = {
    autenticar,
    cadastrar
};