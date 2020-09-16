const express = require('express')
const morgan = require('morgan')
const colors = require('colors')
const path = require('path')
const app = express()

//Settings
app.set('port', 4000)
app.set('views', path.join(__dirname, "views"))
app.set('view engine', 'pug')

//Middleware
app.use(morgan('dev'))

//Routes
app.use(require('./routes'))


//static files
app.use(express.static(path.join(__dirname, 'public')))

//listen, activacion del Servidor
app.listen(app.get('port'), ()=>{
    const msg = `!Servidor Web Node en ejecucion sobre puerto ${app.get('port')}!!`
    console.log(msg.yellow);
})