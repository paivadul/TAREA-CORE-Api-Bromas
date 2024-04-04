const express = require('express')
const jokesRouter = require('./routes/routes')
const connectDB = require('./config/db')
const app = express()

 //conexión a MongoDB
connectDB()

app.use(express.json())
app.use('/api', jokesRouter)

app.listen(3000, () => console.log('Conexión en puerto 3000'))