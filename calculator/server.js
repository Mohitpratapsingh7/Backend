const express = require('express');
const fs = require('fs');
const app = express();

app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    const log = "request received at"+ req.url + "method-"+ req.method + "at timestamp-"+ timestamp + "/n";

    fs.appendFile("./logs.txt", log, (err) => {
        if (err) {
            req.send("cannot write!");
        }
        next();
    });
});

app.get("/sum", (req, res) => {
    const sum = parseInt(req.query.a)+parseInt(req.query.b);
    res.send(sum.toLocaleString());
});
app.get("/subtract", (req, res) => {
    const subtract = parseInt(req.query.a)-parseInt(req.query.b);
    res.send(subtract.toLocaleString());
});
app.get("/multiply", (req, res) => {
    const multiply = parseInt(req.query.a)*parseInt(req.query.b);
    res.send(multiply.toLocaleString());
});
app.get("/divide", (req, res) => {
    const divide = parseInt(req.query.a)/parseInt(req.query.b);
    res.send(divide.toLocaleString());
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});