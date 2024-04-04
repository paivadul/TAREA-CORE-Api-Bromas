const Joke = require('../models/models')
const mongoose = require('mongoose');


const createNewJoke = async (req, res) => {
    const {setup, punchline} = req.body
    
    try {
        const CreateJoke = new Joke(
            {
                setup,
                punchline
            });

        await CreateJoke.save() //GUARDA EN LA BASE DE DATOS
        res.status(200).send(CreateJoke)
    } catch (error) {
        res.status(500).send({message: error.message})
        console.error(error.message)
    }
}

const getAllJokes = async (req, res) => {
    try {
        //BUSCA LOS CHISTES: con la función .find()
        const Jokes = await Joke.find()
        res.status(200).send(Jokes)
    } catch (error) {
        res.status(500).send({message: error.message})
        console.error(error.message)
    }
}

const getJokeById = async (req, res) => {
    //Obtiene el parámetro de la url
    const {id} = req.params
    try {
        //VALIDACIÓN DEL ID POR MONGOOSE: SI EXISTE O NO - !ID
        if (!mongoose.Types.ObjectId.isValid(id))res.status(404).send({message: 'No se encontró el chiste con ese ID'})

        //función que busca por ID en la base de datos
        const deleteJoke = await Joke.findById(id)

        //VALIDACIÓN DEL CHISTE: SI EXISTE O NO - !oneJone 
        if (!deleteJoke) return res.status(404).send({message: 'No se encontró el chiste con ese ID'})

        res.status(200).send(deleteJoke)
    } catch (error) {
        res.status(500).send({message: error.message})
        console.error(error.message)
    }
}

const updateJoke = async (req, res) => {
    const {id} = req.params
    const {setup, punchline} = req.body

    try {
        // Valida el ID utilizando mongoose.Types.ObjectId.isValid()
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send({ message: 'No se encontró la broma con ese ID' });
        }

        // Busca y actualiza la broma por su ID
        const updatedJoke = await Joke.findByIdAndUpdate(id, { setup, punchline }, { new: true });

        // Maneja el caso en el que no se encuentra la broma
        if (!updatedJoke) {
            return res.status(404).send({ message: 'No se encontró la broma con ese ID' });
        }

        // Devuelve la broma actualizada
        res.status(200).send(updatedJoke);
    } catch (error) {
        // Maneja los errores
        res.status(500).send({ message: error.message });
        console.error(error.message);
    }
}

const deleteJoke = async (req, res) => {
    const {id} = req.params
    try {
        //VALIDACIÓN DEL ID POR MONGOOSE: SI EXISTE O NO - !ID
        if (!mongoose.Types.ObjectId.isValid(id))res.status(404).send({message: 'No se encontró el chiste con ese ID'})

        //función que elimina por ID en la base de datos
        const deleteOneJoke = await Joke.findByIdAndDelete(id)

        //VALIDACIÓN DEL CHISTE: SI EXISTE O NO - !oneJone 
        if (!deleteOneJoke) return res.status(404).send({message: 'No se encontró el chiste con ese ID'})

        res.status(200).send(deleteOneJoke)
    } catch (error) {
        res.status(500).send({message: error.message})
        console.error(error.message)
    }
}




module.exports = {
    createNewJoke,
    getAllJokes,
    getJokeById,
    updateJoke,
    deleteJoke
}