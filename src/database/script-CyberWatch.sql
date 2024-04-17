CREATE DATABASE CyberWatch;

Use CyberWatch;

CREATE TABLE Empresa(
idEmpresa int primary key auto_increment,
email varchar(255),
senha varchar(255),
nome varchar(45),
cnpj char(18),
telefone char(11)
);

CREATE TABLE Endereco(
idEndereco int primary key auto_increment,
cidade varchar(50),
bairro varchar(50),
uf char(2),
rua varchar(50),
cep char(8),
complemento char (10)
);

CREATE TABLE Funcionario(
idFuncionario int primary key auto_increment,
nome varchar(45),
cpf char(14),
email varchar(255),
senha varchar(255),
fotoPerfil varchar(255),
fkEndereco int, constraint foreign key(fkEndereco) references endereco (idEndereco),
fkEmpresa int, constraint foreign key (fkEmpresa) references empresa (idEmpresa)
);

CREATE TABLE MaquinasMonitoramento(
idMaquinasMonitoramento int primary key auto_increment,
fkEmpresa int, constraint foreign key (fkEmpresa) references empresa (idEmpresa)
);

CREATE TABLE Disco(
idDisco int primary key auto_increment,
tempoEmAtividade float,
espacoDisponivel float,
espacoTotal float,
fkMaquinasMonitoramento int, constraint foreign key (fkMaquinasMonitoramento) references MaquinasMonitoramento (idMaquinasMonitoramento)
);

CREATE TABLE Ram(
idRam int primary key auto_increment,
disponivel float, 
memoriaTotal float,
memoriaUtiliazada float,
fkMaquinasMonitoramento int, constraint foreign key (fkMaquinasMonitoramento) references MaquinasMonitoramento (idMaquinasMonitoramento)
);

CREATE TABLE Processador(
idProcessador int primary key auto_increment,
modelo varchar(45),
fabricante varchar(45),
nucleosFisicos int,
nucleosLogicos int,
fkMaquinasMonitoramento int, constraint foreign key (fkMaquinasMonitoramento) references MaquinasMonitoramento (idMaquinasMonitoramento)
);

CREATE TABLE Metricas(
idMetricas int primary key auto_increment,
usoCPU float,
temperatura float, 
frequencia float,
fkProcessador int
);

