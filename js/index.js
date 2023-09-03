const http = require("http");
const url = require("url");
const fs = require("fs");

let index = fs.readFileSync("./index.html", "utf-8");
let about = fs.readFileSync("./about.html", "utf-8");
let contact = fs.readFileSync("./contact-me.html", "utf-8");

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/index") {
    //pathName === "/" ||

    res.writeHead(200, { "content-type": "text/html" });
    res.end(index);
  } else if (pathName === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(about);
  } else if (pathName === "/contact-me") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(contact);
  } else {
    res.end("404");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("starting the server");
});
