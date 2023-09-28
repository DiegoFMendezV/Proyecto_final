const mongoose = require('mongoose')

const vueloSchema = mongoose.Schema({
    aerolinea: {
        type: String,
    }, 
    clase: {
        type: String
    },
    numero_vuelo:{
        type: String,
        uniqued: true
    },
    origen:{
        type: String
    },
    destino:{
        type: String
    },
    fecha_hora_vuelo_partida:{
        type: String
    },
    fecha_hora_vuelo_llegada:{
        type: String
    }
})
const Vuelo = mongoose.model("Vuelo", vueloSchema)
module.exports = Vuelo