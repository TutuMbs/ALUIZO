const mongoose = require('mongoose')

const modelo = mongoose.Schema({
    nome:String,
    disciplina:String,
    email:String
})

const professores = mongoose.model('professores',modelo)

module.exports = professores