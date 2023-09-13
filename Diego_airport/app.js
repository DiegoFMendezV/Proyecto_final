const express = require('express')
const mongoose = require('mongoose')
const app = express()
const routes = require('./Server/Routes/router')
const cors = require('cors')

const port = 3000;

app.use(express.json())
app.use(cors())
app.use('/api', routes)

const mongoConnect = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://diegomendez7716:Isabella0110@diego.v8ujdxd.mongodb.net/?retryWrites=true&w=majority'
        )
        console.log('Se realizo correctamente la conexión con Mongo DB')
    }

    catch (err) {
        console.log(err)
    }
}
mongoConnect()

app.listen(port, () => {
    console.log(`Servidor esta en ejecucion en http://localhost:${port}`)
})
