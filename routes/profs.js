module.exports = (app)=>{
    var conexao = require('../config/bancodedados')
            var professores = require('../models/professores')

    //abrir o arquivo professores.ejs
    app.get('/profs',(req,res)=>{
        conexao()
        professores.find()
        .then((professores)=>{
            res.render("professores.ejs",{dados:professores})
        })
    })
    //criar a rota para a gravação do formuário professores
        app.post('/profs',(req,res)=>{
            var documento = new professores ({
                nome:req.body.nome,
                disciplina:req.body.disciplina,
                email:req.body.email
            }).save()
            .then((result)=>{
                res.redirect('/profs')
            })
            .catch((err)=>{
                console.log("Não foi possível gravar os dados no BD")
            })
        })
}