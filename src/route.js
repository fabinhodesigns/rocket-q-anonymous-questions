const express = require('express')

const route = express.Router()

//ROTAS DE NAVEGAÇÃO
route.get('/', (req, res) => res.render('index'))
route.get('/room', (req, res) => res.render('room'))
route.get('/create-room', (req, res) => res.render('create-room'))

module.exports = route