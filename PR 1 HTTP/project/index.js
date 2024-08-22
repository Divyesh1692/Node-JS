const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("homepage.html", "utf-8", (error, data) => {
      if (error) {
        res.end(error.message);
      } else {
        res.end(data);
      }
    });
  } else if (req.url == "/login") {
    res.end("Login");
  } else if (req.url == "/signup") {
    res.end("Signup");
  } else if (req.url == "/contact") {
    res.end("Contact");
  } else if (req.url == "/service") {
    res.end("Service");
  }
});
server.listen(8090, () => {
  console.log("listening on port 8090 ");
});
