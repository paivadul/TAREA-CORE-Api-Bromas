
//CONECTA EL MODELO CON LA BASE DE DATOS. 
const mongoose = require('mongoose');

//mongoose.Schema = creación del esquema utilizado para la base de datos
const jokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: true
    },
    punchline: {
        type: String,
        required: true
    }
}
);

//mongoose.model() = se carga el modelo de datos
const Joke = mongoose.model('Joke', jokeSchema);

module.exports = Joke;