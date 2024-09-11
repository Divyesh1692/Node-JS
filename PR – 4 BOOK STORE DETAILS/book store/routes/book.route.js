const { Router } = require("express");

const {
  Upload,
  updateBook,
  deleteBook,
  getBook,
  getBookId,
  addBook,
  welcome,
  filter,
} = require("../controllers/bs.controller");
const Valid = require("../middleware/valid");

const bookRouter = Router();

bookRouter.get("/", welcome);
bookRouter.get("/books/book/:id", getBookId);
bookRouter.get("/books", getBook);
bookRouter.post("/books/addbooks", Upload.single("img"), Valid, addBook);
bookRouter.delete("/books/delete/:id", deleteBook);
bookRouter.patch("/books/update/:id", updateBook);
bookRouter.get("/books/filter", filter);

module.exports = bookRouter;
