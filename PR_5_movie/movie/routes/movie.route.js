const { Router } = require("express");
const {
  create,
  update,
  movies,
  deleteMovie,
  movieRating,
  movieComment,
  filterMovie,
} = require("../controllers/movie.controller");

const movieRouter = Router();

movieRouter.get("/", movies);
movieRouter.get("/filter", filterMovie);
movieRouter.post("/create", create);
movieRouter.delete("/delete/:id", deleteMovie);
movieRouter.patch("/update/:id", update);
movieRouter.patch("/rating/:id", movieRating);
movieRouter.patch("/comment/:id", movieComment);

module.exports = movieRouter;
