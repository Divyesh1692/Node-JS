const Movie = require("../models/movies.schema");
const multer = require("multer");
const allMovies = async (req, res) => {
  let data = await Movie.find();
  res.json(data);
};

const addMovie = async (req, res) => {
  let { name, duration, year } = req.body;
  let poster;

  if (req.file) {
    console.log(req.file);

    poster = await req.file.path;
    console.log(poster);
  }
  let m = {
    name,
    poster,
    duration,
    year,
  };
  let data = await Movie.create(m);
  res.send(data);
};

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const Upload = multer({
  storage: storage,
});

module.exports = { allMovies, Upload, addMovie };
