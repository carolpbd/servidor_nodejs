const express = require("express")


const app = express()
const porta = 3333

function mostraPorta() {
    console.log("Servidor criado e rodando na porta  ", porta)
}

app.listen(porta, mostraPorta) //computador apos voce ouvir a porta do numero 3333, quero que voce execute a funçao mostraPorta//