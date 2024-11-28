// // const catMe = require("cat-me");

// // console.log(catMe());

// const http = require("http");

// console.log("Hi")

// const server = http.createServer((req, res) => {
//     if(req.url == "/"){
//         res.end("Home Page !!");
//     }else if(req.url == "/about"){
//         res.end("About Page !!");
//     }else if(req.url == "/contact"){
//         res.end("Contact Page !!");
//     }else if(req.url == "/login"){
//         res.end("Login Page !!");
//     }
// })

// server.listen(4000)


const express = require("express");

const app = express();

const morgan = require("morgan");

// Informing App to use ejs as view-engine
app.set("view engine", 'ejs');

// third-party middleware
app.use(morgan('dev'));

// Middleware ( to be used for each route )
app.use((req, res, next) => {
    console.log("This is Middleware !!");
    next();
})

app.get("/", (req, res, next) => {
    const a = 5;
    const b = 10;
    console.log(a+b);

    next();
} , (req, res) => {
    // res.send("Hello World !!");
    res.render("index");
});

app.get('/about', (req, res) => {
    res.send("About Page !!");
});

app.get("/contact", (req, res) => {
    res.send("Contact Page !!");
});

app.get("/login", (req, res) => {
    res.send("Login Page !!");
});

app.listen(4000)