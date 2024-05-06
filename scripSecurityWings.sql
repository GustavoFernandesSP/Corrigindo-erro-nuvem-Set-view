CREATE DATABASE securityWings;

USE securityWings;

CREATE TABLE Empresa(
    idEmpresa int primary key auto_increment,
    nome varchar(45),
    cnpj varchar(20),
    email varchar(255),
    telefone varchar(20),
    senha varchar(255)
);

CREATE TABLE Endereco(
    idEndereco int primary key auto_increment,
    cidade varchar(50),
    bairro varchar(50),
    uf varchar(2),
    rua varchar(50),
    cep varchar(8),
    complemento char(10),
    fkEmpresa int,
    constraint fk_endereco_empresa foreign key (fkEmpresa) references Empresa(idEmpresa)
);

CREATE TABLE usuario(
    idUsuario int primary key auto_increment,
    nome varchar(45),
    cpf char(14),
    email varchar(255) UNIQUE,
    isAdmin boolean,
    senha varchar(255),
    fkEmpresa int,
    constraint fk_empresa_funcionario foreign key (fkEmpresa) references Empresa(idEmpresa)
);

CREATE TABLE ComputadorESpec(
    idComputador int primary key auto_increment,
    discoEspec varchar(45),
    processadorEspec varchar(45),
    memoriaEspec varchar(45),
    fkEmpresa int,
    fkUsuario int,
    constraint fkEmpresa foreign key (fkEmpresa) references Empresa(idEmpresa),
    constraint fkUsuarioComp foreign key(fkUsuario) references usuario(idUsuario)
);

CREATE TABLE Monitoramento(
    idMonitoramento int primary key auto_increment,
    fkComputador int,
    fkUsuario int,
    constraint fkComputadorMon foreign key (fkComputador) references ComputadorESpec(idComputador),
    constraint fkUsuarioMon foreign key(fkUsuario) references usuario(idUsuario)
);


SELECT * FROM Empresa;

SELECT Endereco.rua, Endereco.cep, Empresa.nome
FROM Endereco
INNER JOIN Empresa ON Endereco.fkEmpresa = Empresa.idEmpresa
WHERE Endereco.fkEmpresa = 1;



