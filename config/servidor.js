const express = require('express')
const app = express()

const porta = process.env.PORT || 4040

//configurar o transporte de dados do formulário para o script
app.use(express.urlencoded({extended:false}))

module.exports = {app, porta}
