const isValid = (req, res, next) => {
  let { Task, _id } = req.body;
  if (Task && _id) {
    next();
  } else {
    res.send("Please Enter Reuired Data");
  }
};

module.exports = isValid;
