//importar módulo HTTP
const http = require('http');

//define a porta do servidor
const PORT = 300;

//cria o servidor com uma unica rota
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;
    res.end('Bem vindo ao nosso Server Node.js');
});

//iniciar o servidor
server.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:${PORT}');
});