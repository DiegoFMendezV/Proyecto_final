const express = require('express')
const router = express.Router()
const vueloRouter = require('./vuelosRoutes')

router.use('/vuelos', vueloRouter)

module.exports = router