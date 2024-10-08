const isAuth = (req, res, next) => {
  let { email } = req.cookies;
  if (email) {
    return next();
  } else {
    return res.redirect("/login");
  }
};

module.exports = { isAuth };
