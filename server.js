const http = require("node:http");

const livros = [
  { titulo: "O Hobbit", autor: "J. R. R. Tolkien", preco: 49.9 },
  { titulo: "Duna", autor: "Frank Herbert", preco: 59.9 }
];

const servidor = http.createServer((req, res) => {
  let corpo;
  let status = 200;
  let tipo = "text/plain; charset=utf-8";

  if (req.url === "/") {
    corpo = "Bem-vindo a API da XYZ Bookstore";
  } else if (req.url === "/livros") {
    corpo = JSON.stringify(livros);
    tipo = "application/json; charset=utf-8";
  } else if (req.url === "/carrinho") {
    corpo = "Rota do carrinho - em construcao";
  } else {
    status = 404;
    corpo = JSON.stringify({ erro: "rota inexistente" });
    tipo = "application/json; charset=utf-8";
  }

  res.writeHead(status, { "content-type": tipo });
  res.end(corpo);
});

servidor.listen(3000);
console.log("XYZ Bookstore no ar em http://localhost:3000");