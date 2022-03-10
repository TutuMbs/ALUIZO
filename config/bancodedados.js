const mongoose = require('mongoose')

const conexao = async()=>{
    var bdlocal = await mongoose.connect('mongodb://localhost/fiap')
   // var bdatlas = await  mongoose.connect('mongodb+srv://lucasdias08:Lucas081205&@cluster0.9add4.mongodb.net/fiap')
}

module.exports = conexao