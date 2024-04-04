

const createNewJoke = (req, res) => {
    const {setup, punchline} = req.body
    const chiste ={
        chiste: setup,
        respuesta: punchline
    }
    chiste.save() //guarda el chiste de arriba

    res.json(
        {
            chiste: setup,
            respuesta: punchline
        }
    )
}

module.exports = {
    createNewJoke,
}