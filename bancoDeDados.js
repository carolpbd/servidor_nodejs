const mongoose = require('mongoose')

async function conectaBancoDeDados () { //javascript assíncrono, dependencias das anteriores
  try {
    console.log('conexão com o banco de dados iniciou')

    await mongoose.connect ('mongodb+srv://carolpinheirobd:HfjdPi6TUVF2kb8L@clustermulheres.behroje.mongodb.net/?retryWrites=true&w=majority')

    console.log('Conexão com o banco de dados feita com sucesso!')

  } catch(erro) { //try sendo a tentativa do bloco acima de códigos
    console.log(erro)
  }

}

module.exports  = conectaBancoDeDados