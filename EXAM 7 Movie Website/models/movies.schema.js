const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: String,
  poster: String,
  duration: Number,
  year: Number,
});
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
