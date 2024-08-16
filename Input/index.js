const { create, read, rename, del, add } = require("./FS");

const prompt = require("prompt-sync")();
console.log("Operation : ");
let opr = prompt();

// Create
if (opr == "create") {
  console.log("Enter File Name : ");
  let file = prompt();
  console.log("Enter Content : ");
  let content = prompt();
  create(file, content);
}

// Read
if (opr == "read") {
  console.log("Enter File Name : ");
  let file = prompt();
  read(file);
}

// Rename
if (opr == "rename") {
  console.log("Enter File Name : ");
  let oldName = prompt();
  console.log("Enter New Name : ");
  let newName = prompt();
  rename(oldName, newName);
}

// Add
if (opr == "add") {
  console.log("Enter File Name : ");
  let file = prompt();
  console.log("Enter Data :");
  let content = prompt();
  add(file, content);
}

// Delete
if (opr == "del") {
  console.log("Enter File Name : ");
  let file = prompt();
  del(file);
}
