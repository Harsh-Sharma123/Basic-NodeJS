// const catMe = require("cat-me");

// console.log(catMe());

const http = require("http");

console.log("Hi")

const server = http.createServer((req, res) => {
    if(req.url == "/"){
        res.end("Home Page !!");
    }else if(req.url == "/about"){
        res.end("About Page !!");
    }else if(req.url == "/contact"){
        res.end("Contact Page !!");
    }else if(req.url == "/login"){
        res.end("Login Page !!");
    }
})

server.listen(4000)