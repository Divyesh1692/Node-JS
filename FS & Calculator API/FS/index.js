const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

app.post("/create/:file/:content", (req, res) => {
  const { file, content } = req.params;
  fs.writeFile(file, content, (error) => {
    if (error) {
      res.send(error.message);
    } else {
      res.send("File Written Successfully");
    }
  });
});

app.get("/read/:file", (req, res) => {
  const { file } = req.params;
  fs.readFile(file, "utf-8", (error, data) => {
    if (error) {
      res.send(error.message);
    } else {
      res.send(data);
    }
  });
});

app.patch("/add/:file/:content", (req, res) => {
  const { file, content } = req.params;
  fs.appendFile(file, `\n${content}`, (error) => {
    if (error) {
      res.send(error.message);
    } else {
      res.send("Data Added !!!");
    }
  });
});

app.patch("/rename/:oldName/:newName", (req, res) => {
  const { oldName, newName } = req.params;
  fs.rename(oldName, newName, (error) => {
    if (error) {
      res.send(error.message);
    } else {
      res.send("File Renamed !!!");
    }
  });
});

app.delete("/delete/:file", (req, res) => {
  const { file } = req.params;
  fs.unlink(file, (error) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log("File Deleted !!!");
    }
  });
});
app.listen(2003, () => {
  console.log("listening...");
});
