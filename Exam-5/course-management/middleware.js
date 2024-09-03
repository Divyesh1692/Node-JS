function validate(req, res, next) {
  const { name, category, instructor, duration } = req.body;

  if (!name || !category || !instructor || !duration) {
    return res.status(400).send("All fields are required.");
  }

  next();
}

module.exports = validate;
