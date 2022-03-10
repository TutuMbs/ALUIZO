const mongoose = require('mongoose')

const modelo = mongoose.Schema({
    rm:String,
    nome:String,
    turma:String,
    idade:String
})

const alunos = mongoose.model('alunos',modelo)

module.exports = alunos 