// Configurações do ambiente
var ambiente = "desenvolvimento";
// var ambiente = "producao";

// Importação de módulos
var express = require("express");
var cors = require("cors");
var path = require("path");

// Criação da aplicação Express.js
var app = express();


// Importação de rotas
var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var avisosRouter = require("./src/routes/avisos");
var medidasRouter = require("./src/routes/medidas");
var aquariosRouter = require("./src/routes/aquarios");
var empresasRouter = require("./src/routes/empresas");

// Configurações da aplicação Express.js
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// Definição de rotas
app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/avisos", avisosRouter);
app.use("/medidas", medidasRouter);
app.use("/aquarios", aquariosRouter);
app.use("/empresas", empresasRouter);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// Inicialização do servidor
app.listen(3333, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:3333 \n
    Ambiente: ${ambiente.toUpperCase()} \n
    \t\t${ambiente === "desenvolvimento" ? "Conexão com banco LOCAL (MySQL Workbench)" : "Conexão com banco REMOTO (SQL Server em nuvem Azure)"}`);
});
