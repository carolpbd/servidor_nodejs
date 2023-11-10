const mongoose = require('mongoose')
require('dotenv').config()

async function conectaBancoDeDados () { //javascript assíncrono, dependencias das anteriores
  try {
    console.log('conexão com o banco de dados iniciou')

    await mongoose.connect (process.env.MONGO_URL)

    console.log('Conexão com o banco de dados feita com sucesso!')

  } catch(erro) { //try sendo a tentativa do bloco acima de códigos
    console.log(erro)
  }

}

module.exports  = conectaBancoDeDados