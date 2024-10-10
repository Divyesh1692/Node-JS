const validate = (req, res, next) => {
  let { title, content, author, category, image } = req.body;
  if (title && content && author && category) {
    next();
  } else {
    res.send("All fields are required");
  }
};

module.exports = validate;
