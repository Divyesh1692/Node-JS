const { Router } = require("express");
const {
  createBlog,
  create,
  Upload,
  blogs,
} = require("../controllers/blog.controller");
const auth = require("../middleware/auth");

const blogRouter = Router();

blogRouter.get("/blogs", blogs);
blogRouter.get("/create", createBlog);
blogRouter.post("/create", auth, Upload.single("image"), create);

module.exports = blogRouter;
