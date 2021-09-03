const http = require('http');
const handler = require('./app');

let ports = [8080, 8443];
let servers = [];
let s;

console.log("Server starting...");

ports.forEach(function(port) {
    s = http.createServer(handler);
    s.listen(port);
    servers.push(s);
});


