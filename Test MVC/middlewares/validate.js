const isValid = (req, res, next) => {
  let { Task, _id } = req.body;
  if (Task) {
    next();
  } else {
    res.send("Please Enter Reuired Data");
  }
};

module.exports = isValid;
