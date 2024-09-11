const Valid = (req, res, next) => {
  let {
    title,
    author,
    category,
    publicationYear,
    price,
    quantity,
    description,
  } = req.body;

  if (
    title &&
    author &&
    category &&
    publicationYear &&
    price &&
    quantity &&
    description
  ) {
    next();
  } else {
    res.status(400).send("All fields are required");
  }
};

module.exports = Valid;
