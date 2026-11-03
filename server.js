const http = require("node:http");

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  res.end("<h1>XYZ Bookstore</h1><p>Bem-vindo à nossa livraria.</p>");
});

servidor.listen(3000);
console.log("XYZ Bookstore no ar em http://localhost:3000");