//process.env.AMBIENTE_PROCESSO = "desenvolvimento";
 process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 80;

var app = express();

var indexRouter = require("./src/routes/index");
var empresaRouter = require("./src/routes/empresa");
var usuarioRouter = require("./src/routes/usuario");
var managerRouter = require("./src/routes/manager");
var metricaRouter = require("./src/routes/metrica");
var alertaRouter = require("./src/routes/alerta")
var processoRouter = require("./src/routes/processos")

const { Console } = require("console");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/empresa", empresaRouter);
app.use("/usuario", usuarioRouter);
app.use("/manager", managerRouter);
app.use("/metrica", metricaRouter);
app.use("/alerta" , alertaRouter);
app.use("/processos" , processoRouter)

app.listen(PORTA, function () {
    console.log(`É A TROPA DO WEB-WING-SQUAD NÃO TEM JEITOOOOOOO: http://localhost:${PORTA}`);
});
