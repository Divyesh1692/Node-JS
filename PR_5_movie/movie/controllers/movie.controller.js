const multer = require("multer");
const Movie = require("../models/movie.schema");

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const Upload = multer;
({ storage: storage });

const movies = async (req, res) => {
  let data = await Movie.find();
  res.send(data);
};

const create = async (req, res) => {
  let {
    title,
    description,
    releaseDate,
    category,
    actors,
    ratings,
    comments,
    addedBy,
  } = req.body;

  let image;
  if (req.file) {
    image = req.file.path;
  }

  let m = {
    title,
    description,
    releaseDate,
    category,
    actors,
    image,
    ratings,
    comments,
    addedBy,
  };

  let data = await Movie.create(m);
  res.status(201).send(data);
};

const update = async (req, res) => {
  let { id } = req.params;
  let data = await Movie.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).send(data);
};

const deleteMovie = async (req, res) => {
  let { id } = req.params;
  let data = await Movie.findByIdAndDelete(id);
  res.send({ message: "Movie deleted" });
};

const movieRating = async (req, res) => {
  let { id } = req.params;
  let { rating } = req.body;

  let isMovie = await Movie.findById(id);

  if (isMovie) {
    isMovie.ratings.push({ value: rating });
    await isMovie.save();
    return res.send(isMovie);
  } else {
    return res.send({ error: "movie not found" });
  }
};

const movieComment = async (req, res) => {
  let { id } = req.params;
  let { text } = req.body;
  let isMovie = await Movie.findById(id);
  console.log(isMovie);

  if (isMovie) {
    isMovie.comments.push({ text: text });
    await isMovie.save();
    return res.send(isMovie);
  } else {
    return res.send({ error: "movie not found" });
  }
};

const filterMovie = async (req, res) => {
  let { title, addedBy, releaseDate, category } = req.query;
  let filter = {};
  if (title) {
    filter.title = title;
  }
  if (addedBy) {
    filter.addedBy = addedBy;
  }
  if (releaseDate) {
    filter.releaseDate = releaseDate;
  }
  if (category) {
    filter.category = category;
  }

  let data = await Movie.find(filter);
  res.send(data);
};

module.exports = {
  Upload,
  create,
  update,
  movies,
  deleteMovie,
  movieRating,
  movieComment,
  filterMovie,
};
