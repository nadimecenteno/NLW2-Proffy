//Servidor
//express é o servidor que está sendo usado
const express = require('express') //o require está retornando um objeto, que é justamente o servidor da aplicação
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')


//Configurar nunjucks (que é um template engine para js)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true, //desativa o cache para permitir sempre as novas versões e não ter problemas com a atualização
})

//Início e configuração do servidor
server
//Receber os dados do req.body
//por padrão o servidor não aceita o envio do tipo req.body. dessa forma, na próxima linha de código, está forçando a receber.
.use(express.urlencoded({ extended: true}))
//Configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public")) //.use = conf do servidor
//Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses) //rota ao enviar o formulário

/** .get("/", (req, res) => { //req = dados de transferencia, ex: formulario da pagina etc. res = página a ser exibida ao usuario como resposta do url //() => { (ARROW FUNCTION) ISSO É UMA FUNÇÃO CURTA. faz a mesma coisa de uma função normal, porém não tem nome, esse foi substituido por =>
    return res.sendFile(__dirname + "/views/index.html")
})
.get("/study", (req, res) => {
    return res.sendFile(__dirname + "/views/study.html")
})
.get("/give-classes", (req, res) => {
    return res.sendFile(__dirname + "/views/give-classes.html")
}) **/

//Start do servidor
.listen(5500)