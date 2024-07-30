const https = require("https");
const http = require("http");
const fs = require("fs");
console.log(process.env.CN)
https.createServer({
    key: fs.readFileSync("./certs/server.key"),
    cert: fs.readFileSync("./certs/server.crt"),
    passphrase: process.env.PASSWORD
},(req, res) => {
    req.pipe(http.request({
        host: "127.0.0.1",
        port: "2998",
        path: req.url,
        method: req.method,
        headers: req.headers,
        body: req.body
    }, (resp) => {
        res.writeHead(resp.statusCode,resp.headers);
        resp.pipe(res);
    }));
}).listen(3000, process.env.CN);