const { Router } = require("express");
const { addData, upload } = require("../controllers/controller");

const studentRouter = Router();

studentRouter.post("/add", upload.single("excel"),addData);

module.exports = studentRouter;
