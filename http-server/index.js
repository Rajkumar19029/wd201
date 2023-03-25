const http = require("http");
const fs = require("fs");
const server = http.createServer(function (request, response) {
  if (request.url === "/") {
    fs.readFile("home.html", function (err, data) {
      if (err) {
        response.writeHead(500);
        response.end("Error loading index.html");
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(data);
      }
    });
  } else if (request.url === "/project") {
    fs.readFile("project.html", function (err, data) {
      if (err) {
        response.writeHead(500);
        response.end("Error loading about.html");
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(data);
      }
    });
  } else if (request.url === "/registration") {
    fs.readFile("registration.html", function (err, data) {
      if (err) {
        response.writeHead(500);
        response.end("Error loading contact.html");
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(data);
      }
    });
  } else {
    // handle 404 error
    response.writeHead(404);
    response.end("Page not found");
  }
});
server.listen(5000, function () {
  console.log("Server is listening on port 5000");
});
