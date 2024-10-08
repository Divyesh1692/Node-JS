const { Router } = require("express");
const {
  allMovies,
  addMovie,
  Upload,
  uploadPage,
  homePage,
  dashboard,
  myMovies,
  Approve,
  Reject,
  Delete,
  Update,
} = require("../controllers/movieController");
const { isAuth } = require("../middleware/validate");
const userRouter = require("./userRoutes");

const movieRouter = Router();
movieRouter.get("/home", isAuth, homePage);
movieRouter.get("/movies", isAuth, allMovies);
movieRouter.get("/upload", isAuth, uploadPage);
movieRouter.post("/upload", Upload.single("poster"), addMovie);
movieRouter.get("/dashboard", isAuth, dashboard);
userRouter.get("/mymovies", isAuth, myMovies);
userRouter.patch("/movies/approve/:id", isAuth, Approve);
userRouter.patch("/movies/reject/:id", isAuth, Reject);
userRouter.patch("/movies/update/:id", isAuth, Update);
userRouter.delete("/movies/delete/:id", isAuth, Delete);

module.exports = movieRouter;
