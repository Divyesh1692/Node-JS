const { Router } = require("express");
const {
  getblog,
  createblog,
  updateblog,
  deleteblog,
} = require("../controllers/blog.controller");

const blog = Router();

blog.get("/blog", getblog);
blog.post("/blog", createblog);
blog.patch("/blog/:id", updateblog);
blog.delete("/blog/:id", deleteblog);

module.exports = blog;
