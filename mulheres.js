const express = require("express")
const router = express.Router
const { v4: uuidv4 } = require('uuid')


const app = express()
const porta = 3333

//criaçao de lista inicial de mulheres

const mulheres = [
    {
        id: '1',
        nome: 'Carol Pinheiro',
        imagem: 'carol.jpg',
        minibio: 'Aprendiz de dev fullstack e cheia de sonhos'
    },

    {
        id: '1',
        nome: 'Ada Lovelace',
        imagem: 'ada.jpg',
        minibio: 'Instrutora'
    },

    {
        id: '3',
        nome: 'Grace Hopper',
        imagem: 'grace.jpg',
        minibio: 'Instrutora'
    }
]

//GET
function mostraMulheres(request, response) {
    response.json(mulheres)
}

//POST
function criaMulher(request, response) {
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.name,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }

    mulheres.push(novaMulher)

    response.json(mulheres)
}

//PORTA
function mostraPorta() {
    console.log("Servidor cirado e rodando na porta ", porta)

}

app.use(router.length('/mulheres', mostraMulheres)) //config rota GET /mulheres
app.use(router.post('/mulheres', criaMulher)) //config rota POST
app.listen(porta, mostraPorta) //servidor ouvindo 