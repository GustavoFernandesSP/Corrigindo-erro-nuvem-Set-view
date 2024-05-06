# NOSSA TABELA;

CREATE DATABASE securityWings;

USE securityWings;

CREATE TABLE Empresa(
    idEmpresa int primary key auto_increment,
    nome varchar(100),
    cnpj char(14) unique,
    email varchar(255),
    telefone char(8),
    senha varchar(255)
);

CREATE TABLE Endereco(
    idEndereco int primary key auto_increment,
    cidade varchar(50),
    bairro varchar(50),
    uf char(2),
    rua varchar(50),
    cep char(8),
    complemento varchar(20),
    fkEmpresa int,
    constraint fk_endereco_empresa foreign key (fkEmpresa) references Empresa(idEmpresa)
);

CREATE TABLE usuario(
    idUsuario int primary key auto_increment,
    nome varchar(45),
    cpf char(14) unique,
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


select * from empresa;


INSERT INTO usuario (nome, cpf, email, isAdmin, senha, fkEmpresa)
VALUES ('Funcionario1', '123.456.789-10', '1@1', true, '123', 1);

INSERT INTO usuario (nome, cpf, email, isAdmin, senha, fkEmpresa)
VALUES ('Eduardo', '123.456.789-10', 'e@e', true, '123', 1);

INSERT INTO usuario (nome, cpf, email, isAdmin, senha, fkEmpresa)
VALUES ('Funcionario2', '987.654.321-10', 'funcionario2@example.com', false, '456', 1);



	select * from usuario where fkEmpresa =1;	



