const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/jugos', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conexión establecida con MongoDB');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
    }
};

module.exports = connectDB;
