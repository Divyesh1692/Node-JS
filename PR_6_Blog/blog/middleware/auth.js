const auth = (req, res, next) => {
  let { role } = req.cookies;
  if (role == "admin") {
    next();
  } else {
    res.send("You are not authorized to access this page.");
  }
};

module.exports = auth;
