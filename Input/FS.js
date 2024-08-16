const { error } = require("console");
const fs = require("fs");

//File Write
const create = (file, content) => {
  fs.writeFile(file, content, (error) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log("File Written Successfully");
    }
  });
};

//Read File
const read = (file) => {
  fs.readFile(file, "utf-8", (error, data) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log(data);
    }
  });
};

//Rename File
const rename = (oldName, newName) => {
  fs.rename(oldName, newName, (error) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log("File Renamed !!!");
    }
  });
};

//Append File
const add = (file, content) => {
  fs.appendFile(file, `\n${content}`, (error) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log("Data Added !!!");
    }
  });
};

const del = (file) => {
  fs.unlink(file, (error) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log("File Deleted !!!");
    }
  });
};
module.exports = { del, add, read, rename, create };
