const http = require('http');

const server = http.createServer((req, res) => {
    res.status(200);
});
server.listen(8080);
console.log('Hello World!');