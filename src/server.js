// server
const express = require("express")
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require("./pages")


const nunjucks = require("nunjucks")

// configurar nunjucks (template engine)
nunjucks.configure("./src/views", {
    express: server,
    noCache: true,
})

// inicio e configuracao 
server
//receber os dados do req.body
.use(express.urlencoded({extended: true}))
// configurando arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// start do servidor
.listen(5500)