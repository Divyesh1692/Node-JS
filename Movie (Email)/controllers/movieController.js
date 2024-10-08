const Movie = require("../models/movies.schema");
const path = require("path");
const multer = require("multer");
const User = require("../models/user.schema");

const allMovies = async (req, res) => {
  const { search, category, duration, year } = req.query;

  let query = {};

  if (search) {
    query.name = { $regex: search, $options: "i" };
  }

  if (category) {
    query.category = category;
  }

  let moviesQuery = Movie.find(query);

  if (duration) {
    moviesQuery = moviesQuery.sort({ duration: duration == "asc" ? 1 : -1 });
  }

  if (year) {
    moviesQuery = moviesQuery.sort({ year: year == "asc" ? 1 : -1 });
  }

  const filteredMovies = await moviesQuery;

  res.status(200).json(filteredMovies);
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
  let user = await User.findById(id);
  if (user.role == "admin") {
    let data = await Movie.find();
    return res.send({ data, user });
  } else {
    let data = await Movie.find({ uploaded: user.username });
    return res.send({ data, user });
  }
};

const Approve = async (req, res) => {
  let { id } = req.params;
  let movie = await Movie.findById(id);
  if (movie) {
    movie.approved = "Approved";
    await movie.save();
    res.send({ msg: "Movie Approved" });
  } else {
    res.send({ msg: "Moive Not Found!!!" });
  }
};

const Reject = async (req, res) => {
  let { id } = req.params;
  let movie = await Movie.findById(id);
  if (movie) {
    movie.approved = "Rejected";
    await movie.save();
    res.send({ msg: "Movie Rejected" });
  } else {
    res.send({ msg: "Moive Not Found!!!" });
  }
};

const Delete = async (req, res) => {
  let { id } = req.params;
  let data = await Movie.findByIdAndDelete(id);
  res.send(data);
};

const Update = async (req, res) => {
  let { id } = req.params;
  let data = await Movie.findByIdAndUpdate(id, req.body);
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
  Approve,
  Reject,
  Delete,
  Update
};
