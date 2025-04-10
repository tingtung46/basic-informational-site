let http = require("node:http");
let fs = require("node:fs");
let url = require("node:url");

const page404 = fs.readFileSync("./404.html", (err, data) => {
  if (err) throw err;
  return data;
});

const renderHTML = (fileName, res) => {
  fs.readFile(fileName, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write(page404);
      return res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    }
  });
};

const server = http.createServer((req, res) => {
  let path = url.parse(req.url, true).pathname;

  switch (path) {
    case "/":
      renderHTML("./index.html", res);
      break;
    case "/about":
      renderHTML("./about.html", res);
      break;
    case "/contact-me":
      renderHTML("./contact-me.html", res);
      break;
    default:
      res.writeHead(404);
      res.write("Route not defined");
      res.end();
  }
});

server.listen(8080);
