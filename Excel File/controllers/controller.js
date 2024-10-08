const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const XLSX = require("xlsx");
const student = require("../models/studentSchema");

const addData = async (req, res) => {
  if (!req.file) {
    return res.status(400).send("Please upload an Excel file.");
  }

  const workbook = XLSX.readFile(req.file.path);
  const sheetNames = workbook.SheetNames;
  const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[0]]);

  try {
    await student.insertMany(data);
    res.send("success");
  } catch (error) {
    res.send("fail");
  }
};

module.exports = { addData, upload };
