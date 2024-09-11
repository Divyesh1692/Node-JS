const book = require("../models/bsSchema");
const multer = require("multer");

const welcome = (req, res) => {
  res.send("welcome to the book store");
};

const getBook = async (req, res) => {
  let books = await book.find();
  res.send(books);
};

const getBookId = async (req, res) => {
  let { id } = req.params;
  let data = await book.findById(id);
  if (data) {
    return res.send(data);
  } else {
    return res.status(404).send(error);
  }
};

const addBook = async (req, res) => {
  console.log("file", req.file);
  console.log("body", req.body);

  let {
    title,
    author,
    category,
    publicationYear,
    price,
    quantity,
    description,
  } = req.body;

  let imageUrl;
  if (req.file) {
    imageUrl = req.file.path;
  }
  let Book = {
    title,
    author,
    category,
    publicationYear,
    price,
    quantity,
    description,
    imageUrl,
  };
  let data = await book.create(Book);
  res.send(data);
};

const deleteBook = async (req, res) => {
  let { id } = req.params;
  console.log(id);

  let data = await book.findByIdAndDelete(id);
  console.log(data);

  res.send(data);
};

const updateBook = async (req, res) => {
  let { id } = req.params;
  let data = await book.findByIdAndUpdate(id, req.body);
  console.log(data);

  res.send(data);
};

const filter = async (req, res) => {
  const { author, category, title, price } = req.query;
  let Filter = {};

  if (author) Filter.author = author;
  if (category) Filter.category = category;
  if (title) Filter.title = title;

  let data = await book.find(Filter);

  if (price) {
    if (price === "lth") data = data.sort((a, b) => a.price - b.price);
    else if (price === "htl") data = data.sort((a, b) => b.price - a.price);
  }

  res.send(data);
};

const storage = multer.diskStorage({
  destination: "Uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const Upload = multer({
  storage: storage,
});

module.exports = {
  Upload,
  updateBook,
  deleteBook,
  getBook,
  getBookId,
  addBook,
  welcome,
  filter,
};
