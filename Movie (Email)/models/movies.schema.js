const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: String,
  poster: String,
  category: String,
  duration: Number,
  year: Number,
  uploaded: String,
  approved: { type: Boolean, default: false },
});
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
