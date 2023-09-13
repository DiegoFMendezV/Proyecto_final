const mongoose = require('mongoose')

const vueloSchema = mongoose.Schema({
    aerolinea: {
        type: String,
    }, 
    clase: {
        type: String
    },
    numero_vuelo:{
        type: String
    },
    origen:{
        type: String
    },
    destino:{
        type: String
    },
    fecha_hora_vuelo_partida:{
        type: Date
    },
    fecha_hora_vuelo_llegada:{
        type: Date
    }
})
const Vuelo = mongoose.model("Vuelo", vueloSchema)
module.exports = Vuelo