const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/jokes', { 
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conexión establecida con MongoDB');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
    }
};

module.exports = connectDB;

//AL CONECTAR CON MONGOOSE EN CONFIG DIRECTAMENTE YA CREA LA COLECCIÓN EN EL COMPASS