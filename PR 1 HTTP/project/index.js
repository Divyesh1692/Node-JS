const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    fs.readFile("homepage.html", "utf-8", (error, data) => {
      if (error) {
        res.end(error.message);
      } else {
        res.end(data);
      }
    });
  } else if (req.url == "/login") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("Login");
  } else if (req.url == "/signup") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("Signup");
  } else if (req.url == "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("Contact");
  } else if (req.url == "/service") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("Service");
  }
});
server.listen(8090, () => {
  console.log("listening on port 8090 ");
});
