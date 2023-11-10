const express = require("express")
const router = express.Router()
const cors = require('cors') //aqui estou trazendo o pacote cors que permite consumir essa API no front

const conectaBancoDeDados = require('./bancoDeDados') //ligando o bd ao arquivo bd
conectaBancoDeDados() //chamando a função que conecta o bd

const Mulher = require('./mulherModel')

const app = express()
app.use(express.json())//a partir de agora os arquivos estarão em formato JSON
app.use(cors())
const porta = 3333


//GET
async function mostraMulheres(request, response) {
   try {
    const mulheresVindasdoBancoDeDados = await Mulher.find()

    response.json(mulheresVindasdoBancoDeDados)
   }catch (erro) {
    console.log(erro)
   }
    
}

//POST
async function criaMulher(request, response) {
    const novaMulher =  new Mulher({
        
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    })

    try {
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada)
    } catch (erro) {
        console.log(erro)
    }
}

//PATCH
    async function corrigeMulher (request, response) {
      
        try {
            const mulherEncontrada = await Mulher.findById(request.params.id)
            if (request.body.nome) {
                mulherEncontrada.nome = request.body.nome
            }
    
            if (request.body.minibio) {
                mulherEncontrada.minibio = request.body.minibio
            }
    
            if (request.body.imagem) {
                mulherEncontrada = request.body.imagem
            }

            if (request.body.citacao) {
                mulherEncontrada = request.body.citacao
            }

            const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()
            response.json(mulherAtualizadaNoBancoDeDados)

        }catch (erro) {
            console.log(erro)
        }
    
    }

//DELETE

 async function deletaMulher(request, response) {
   try {
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({mensagem: 'Mulher deletada com sucesso!'})

   } catch (erro) {
    console.log(erro)
   }

    
}

//PORTA
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)

}

app.use(router.get('/mulheres', mostraMulheres)) //config rota GET /mulheres
app.use(router.post('/mulheres', criaMulher)) //config rota POST
app.use(router.patch('/mulheres/:id', corrigeMulher))//config rota Patch
app.use(router.delete('/mulheres/:id', deletaMulher))//config rota Delete

app.listen(porta, mostraPorta) //servidor ouvindo 