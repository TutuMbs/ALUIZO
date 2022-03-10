const servidor = require('./config/servidor')
const app = servidor.app
const porta = servidor.porta

var form = require('./routes/form')(app)
var profs = require('./routes/profs')(app)

app.listen(porta,()=>{
    console.log('servidor em http://localhost:'+porta)
})