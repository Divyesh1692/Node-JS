const Movie = require("../models/movies.schema");
const path = require("path");
const multer = require("multer");
const User = require("../models/user.schema");

const allMovies = async (req, res) => {
  const { search, category, duration, year } = req.query;

  let filteredMovies = await Movie.find();
  if (search) {
    filteredMovies = await filteredMovies.filter((movie) =>
      movie.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (category) {
    filteredMovies = await filteredMovies.find(category);
  }

  if (duration) {
    if (duration == "asc") {
      await filteredMovies.sort((a, b) => a.duration - b.duration);
    } else {
      await filteredMovies.sort((a, b) => b.duration - a.duration);
    }
  }

  if (year) {
    if (year == "asc") {
      await filteredMovies.sort((a, b) => a.year - b.year);
    } else {
      await filteredMovies.sort((a, b) => b.year - a.year);
    }
  }
  res.send(filteredMovies);
};

const addMovie = async (req, res) => {
  let { name, duration, year, category } = req.body;
  let { id } = req.cookies;
  let user = await User.findById(id);
  let uploaded = user.username;
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
    category,
    uploaded,
  };
  let data = await Movie.create(m);
  res.send(`<script>
    alert('Movie uploaded successfully!');
    window.location.href = 'upload';
</script>`);
};

const uploadPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "upload.html"));
};

const homePage = (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "home.html"));
};

const dashboard = async (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "dashboard.html"));
};

const myMovies = async (req, res) => {
  let { id } = req.cookies;
  let data = await User.findById(id);
  res.send(data);
};

const Delete = (req, res) => {
  let { id } = req.params;
  let data = Movie.findByIdAndDelete(id);
  console.log(id);
  console.log(data);

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

module.exports = {
  allMovies,
  Upload,
  addMovie,
  uploadPage,
  homePage,
  dashboard,
  myMovies,
  Delete,
};
