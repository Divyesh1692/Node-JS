const isValid = (req, res, next) => {
  let { Name, Price, Quantity } = req.body;
  if (Name && Price && Quantity) {
    next();
  } else {
    res.send("Please Enter Reuired Data");
  }
};

module.exports = isValid;
