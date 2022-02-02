const express = require('express')
const route = require('./route')
const path = require('path')

/* EXECUTAR EXPRESS */
const server = express()

server.use(express.urlencoded({ extended: true }))

server.use(route)

/* CONFIGURAÇÃO EJS*/
server.set('view engine', 'ejs')

server.use(express.static('public'))

server.set('views', path.join(__dirname, 'views'))

/* INICIAR SERVIDOR NA PORTA 3000*/
server.listen(process.env.PORT || 3000, () =>
    console.log('Server is running in port 3000 🚀🔥')
)