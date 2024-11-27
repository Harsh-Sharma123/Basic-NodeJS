// const catMe = require("cat-me");

// console.log(catMe());

const http = require("http");

console.log("Hi")

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.end("Hello")
})

server.listen(4000)