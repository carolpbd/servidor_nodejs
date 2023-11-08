const express = require("express") //inicio do express
const router = express.Router()//configuração da primeira parte da rota

const app = express()//inicio do app
const porta = 3333 //criação da rota


function mostraMulher(request, response) {
    response.json({
        nome: 'Carol Pinheiro',
        imagem: 'carol.jpg',
        minibio: 'Aprendiz de dev fullstack e cheia de sonhos'
    })
}

function mostraPorta () {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)