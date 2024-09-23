const { Router } = require("express");
const {
  allMovies,
  addMovie,
  Upload,
} = require("../controllers/movieController");

const movieRouter = Router();
movieRouter.get("/home", allMovies);
movieRouter.post("/upload", Upload.single("poster"), addMovie);

module.exports = movieRouter;
