module.exports = (app)=>{

    app.get('/cadastro',(req,res)=>{
        res.render('formulario.ejs')
    })

    app.get('/',(req,res)=>{
        res.render('index.ejs')
    })

    app.post('/create',(req,res)=>{
        //importar as configurações do banco de dados
        //var bancodedados = require('../config/bancodedados')

        //criar uma variável para a conexão
        var conexao = require('../config/bancodedados')
        //executar a conexão
        conexao()
        //criar uma variável para coleção de alunos
        var alunos = require('../models/alunos')
        //receber as informações do formulário
        var formulario = req.body
        //criar um documento com as infos do form
        var documento = new alunos({
            nome:formulario.nome,
            turma:formulario.turma,
            idade:formulario.idade
        }).save()
        .then((result)=>{
            res.redirect('/cadastro')
        })
        .catch((err)=>{
            console.log('não foi possível gravar as informações')
        })

    })

}