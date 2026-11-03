const http = require("node:http");
const servidor = http.createServer((req) => {
  console.log("Pedido recebido em: " + req.url);
});
servidor.listen(3000);
console.log("XYZ Bookstore no ar em http://localhost:3000");