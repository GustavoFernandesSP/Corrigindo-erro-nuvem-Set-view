process.env.AMBIENTE_PROCESSO = "desenvolvimento";
// process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

var app = express();

var indexRouter = require("./src/routes/index");
var empresaRouter = require("./src/routes/empresa");
var avisosRouter = require("./src/routes/avisos");
var medidasRouter = require("./src/routes/medidas");
var aquariosRouter = require("./src/routes/aquarios");
var usuarioRouter = require("./src/routes/usuario");
var managerRouter = require("./src/routes/manager");
const { Console } = require("console");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/empresa", empresaRouter);
app.use("/avisos", avisosRouter);
app.use("/medidas", medidasRouter);
app.use("/aquarios", aquariosRouter);
app.use("/usuario", usuarioRouter);
app.use("/manager", managerRouter)

app.listen(PORTA, function () {
    console.log(`É A TROPA DO WEB-WING-SQUAD NÃO TEM JEITOOOOOOO: http://localhost:${PORTA}`);
});
