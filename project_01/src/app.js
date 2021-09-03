function handler(req, res) {
    console.log("Request from " + req.socket.remoteAddress + ":" + req.socket.remotePort + "\n");
    res.writeHead(200);
    res.end("You've hit " + req.socket.localAddress + " through port " + req.socket.localPort + "\n");
}

module.exports = handler;