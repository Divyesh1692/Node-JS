const { error } = require("console");
const fs = require("fs");

let opr = process.argv[2];
let file = process.argv[3];
let content = process.argv[4];
//File Write
if (opr == "create") {
  fs.writeFile(file, content, (error) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log("File Written Successfully");
    }
  });
}

//Read File
if (opr == "read") {
  fs.readFile(file, "utf-8", (error, data) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log(data);
    }
  });
}

//Rename File
if (opr == "rename") {
  fs.rename(file, content, (error) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log("File Renamed !!!");
    }
  });
}

//Append File
if (opr == "add") {
  fs.appendFile(file, `\n${content}`, (error) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log("Data Added !!!");
    }
  });
}

if (opr == "delete") {
  fs.unlink(file, (error) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log("File Deleted !!!");
    }
  });
}
