const { Router } = require("express");
const { createNewJoke } = require("../controllers/JokeController");
const router = Router();

// router.get("/api/jokes/", JokeController.findAllJokes);
// router.get("/api/jokes/:id", JokeController.findOneSingleJoke);
// router.put("/api/jokes/update/:id", JokeController.updateExistingJoke);
router.post("/jokes/new", createNewJoke);
// router.delete("/api/jokes/delete/:id", JokeController.deleteAnExistingJoke);

module.exports = router;
