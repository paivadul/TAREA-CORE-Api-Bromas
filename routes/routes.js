const { Router } = require("express");
const { createNewJoke, getAllJokes, getJokeById, updateJoke, deleteJoke} = require("../controllers/JokeController");
const router = Router();

router.get("/jokes", getAllJokes);
router.get("/jokes/:id", getJokeById);
router.put("/jokes/update/:id", updateJoke);
router.post("/jokes/new", createNewJoke);
router.delete("/jokes/delete/:id", deleteJoke);

module.exports = router;